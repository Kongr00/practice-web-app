import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Comment} from "./comment.model";
import {JwtService} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";
import {Post} from "../post/post.model";
import {User} from "../user/user.model";

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports : [
      SequelizeModule.forFeature([Comment, Post, User]),
      AuthModule
  ],
})
export class CommentModule {}
