import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../user/dto/CreateUserDto";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import { hash, compare } from 'bcryptjs';
import {User} from "../user/user.model";
import * as process from "process";

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService){}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    async register(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate){
            throw new HttpException(`User with email ${userDto.email} is already exist`, HttpStatus.BAD_REQUEST)
        }
        const hashedPassword = await hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashedPassword})
        return this.generateToken(user);
    }

    private generateToken(user: User) {
        const payload = {
            email: user.email,
            id: user.id
        }

        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        try {
            const user= await this.userService.getUserByEmail(userDto.email);
            const passwordEquals = await compare(userDto.password, user.password)
            if(user && passwordEquals) {
                return user
            }
            throw new UnauthorizedException({message: 'Incorrect email or password, try again'})
        }
        catch (e) {
            throw new UnauthorizedException({message: 'Incorrect email or password, try again'})

        }

    }
}
