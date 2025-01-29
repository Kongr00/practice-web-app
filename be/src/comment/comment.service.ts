import {HttpException, Injectable} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Comment} from "./comment.model";
import {User} from "../user/user.model";
import {Post} from "../post/post.model";


@Injectable()
export class CommentService {

  constructor(
      @InjectModel(Comment) private commentRepository: typeof Comment,
      @InjectModel(User) private userRepository: typeof User,
      @InjectModel(Post) private postRepository: typeof Post,

  ) {}
  async create(createCommentDto: CreateCommentDto) {
      return await this.commentRepository.create(createCommentDto);
  }

  async findAll() {
      return await this.commentRepository.findAll(
  {
              include : [
                  {
                      model: Post,
                      attributes: ['id', 'title']
                  },
              ]
          }
      );
  }

  async findOne(id: number) {
      return await this.commentRepository.findOne(
      {
              where: { id : id },
              include : [
                  {
                      model: Post,
                      attributes: ['id', 'title']
                  },
              ]
            }
      );
  }

  async findAllByName(name: string){
      const userCandidate = await this.userRepository.findOne({where: { username: name}});

      if (!userCandidate) {
          throw new HttpException(`User with username "${name}" not found`, 404);
      }

      return await this.commentRepository.findAll(
          {
              where: { authorId : userCandidate.id },
              include : [
                  {
                      model: Post,
                      attributes: ['id', 'title']
                  },
              ]
          }
      );
  }

    async remove(id: number) {
        return await this.commentRepository.destroy({where : { id : id }})
    }

    async getAllCommentByPostId(id: number) {
        const postCandidate = await this.postRepository.findOne({where: { id: id }});

        if (!postCandidate) {
            throw new HttpException(`User with username "${name}" not found`, 404);
        }

        return await this.commentRepository.findAll(
            {
                where: { postId : postCandidate.id },
                include : [
                    {
                        model: Post,
                        attributes: ['id', 'title']
                    },
                    {
                        as: 'author',
                        model: User,
                        attributes: ['username', 'email']
                    }
                ]
            }
        );
    }

    async findAllByUserId(id: number) {
        const userCandidate = await this.userRepository.findOne({where: { id: id } });

        if (!userCandidate) {
            throw new HttpException(`User with id "${id}" not found`, 404);
        }

        return await this.commentRepository.findAll(
            {
                where: { authorId : id },
                include : [
                    {
                        model: Post,
                        attributes: ['id', 'title']
                    },
                    {
                        as: 'author',
                        model: User,
                        attributes: ['username', 'email']
                    }
                ]
            }
        );
    }
}
