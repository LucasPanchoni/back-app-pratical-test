import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/shared/users.service';
import { UsersController } from './users/users.controller';
import { PlansService } from './plans/shared/plans.service';
import { PlansController } from './plans/plans.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    AuthModule,],
  controllers: [
    UsersController,
    PlansController, AppController],
  providers: [
    UsersService,
    PlansService, AppService],
})
export class AppModule { }
