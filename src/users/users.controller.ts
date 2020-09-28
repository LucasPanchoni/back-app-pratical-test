import { UserChangeplan } from './shared/userChangePlan';
import { Controller, Get, Param, Post, UseGuards, Request, Body, Put} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { Users } from './shared/users';
import { UsersService } from './shared/users.service';
import { UsersDTO } from './shared/usersDTO';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<Users[]> {
        return this.usersService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Users> {
        return this.usersService.getById(id);
    }

    @Get('/login/:login')
    async getByLogin(@Param('login') login: string): Promise<UsersDTO> {
        return this.usersService.getDTOByLogin(login);
    }

    @UseGuards(JwtAuthGuard)
    @Put('/changePlan/')
    async changePlan(@Body() req: UserChangeplan) {
        return this.usersService.changePlan(req);
    }

}