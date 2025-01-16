import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {CreateUserDto} from "./dto/CreateUserDto";

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}
    async createUser(dto: CreateUserDto) {
        return  await this.userRepository.create(dto);
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll()
        return users
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: { email } });
    }

}
