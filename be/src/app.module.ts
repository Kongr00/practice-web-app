import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { RolesModule } from './roles/roles.module';
import { DatabaseModule } from './database/database.module';
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "process";
import {User} from "./user/user.model";
@Module({
  imports: [
      ConfigModule.forRoot(),
      UserModule,
      PostModule,
      RolesModule,
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: 'localhost',
          port: 5432,
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DATABASE,
          models: [User],
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
