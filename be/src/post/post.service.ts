import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./post.model";
import {CreatePostDto} from "./dto/create-post-dto";

@Injectable()
export class PostService {

    constructor(@InjectModel(Post) private postRepository: typeof Post) {
    }

    async createPost(dto: CreatePostDto) {
        try {
            return await this.postRepository.create(dto)
        }catch (e){
            console.log(e)
        }
    }
    async getAllPosts() {
        return await this.postRepository.findAll()
    }

    async getAllPostsByCategory(category: string) {
        return await this.postRepository.findAll({where: {category: category}})
    }

    async getPostById(id: string) {
        return await this.postRepository.findOne( {where: {id: id}})
    }

}
