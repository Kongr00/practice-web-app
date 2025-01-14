import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/CreateUserDto";

@Controller('api')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Get('user')
    getUsers() {
        return this.userService.getAllUsers()
    }

    @Post('user')
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }
}
