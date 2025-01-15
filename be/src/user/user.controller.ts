import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/CreateUserDto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth-guard";

@Controller('api')
export class UserController {

    constructor(
        private readonly userService: UserService) {}


    @UseGuards(JwtAuthGuard)
    @Get('user')
    getUsers() {
        return this.userService.getAllUsers()
    }

    @UseGuards(JwtAuthGuard)
    @Post('user')
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }
}
