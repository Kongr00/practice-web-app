import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {UserModule} from './user/user.module';
import {PostModule} from './post/post.module';
import {RolesModule} from './roles/roles.module';
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "process";
import {User} from "./user/user.model";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      UserModule,
      PostModule,
      RolesModule,
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: 'localhost',  // postgres => docker | localhost => npm run start:dev
          port: 5432,
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DATABASE,
          models: [User],
          autoLoadModels: true,
      }),
      AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
