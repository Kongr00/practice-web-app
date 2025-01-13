import {Body, Controller, Get, Post} from '@nestjs/common';
import {AppService} from "../app.service";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/CreateUserDto";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Get()
    getUsers() {
        this.userService.getAllUsers()
    }

    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        this.userService.createUser(userDto)
    }
}
