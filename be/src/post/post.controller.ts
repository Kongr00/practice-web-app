import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {PostService} from "./post.service";
import {CreatePostDto} from "./dto/CreatePostDto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth-guard";

@Controller('api/post')
export class PostController {

    constructor(
        private readonly postService: PostService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('')
    getAllPosts() {
        return this.postService.getAllPosts();
    }

    @UseGuards(JwtAuthGuard)
    @Get('category/:category')
    getAllPostsByCategory(@Param('category') category: string) {
        return this.postService.getAllPostsByCategory(category);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getPostById(@Param('id') id : string) {
        console.log(id)
        return this.postService.getPostById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postService.createPost(createPostDto);
    }
}
