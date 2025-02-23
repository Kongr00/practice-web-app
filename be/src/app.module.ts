import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { RolesModule } from './roles/roles.module';
@Module({
  imports: [ConfigModule.forRoot(), UserModule, PostModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
