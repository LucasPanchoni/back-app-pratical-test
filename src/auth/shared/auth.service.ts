import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/shared/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService : UsersService,
        private jwtService: JwtService
    ){}

    validateUser(login: string, password: string){
        const user = this.usersService.getByLogin(login); 
        if(user && user.password == password){
            return user;
        }else{
            return null;
        }
    }

    login(user: any) {
        const payload = {login: user.login, sub: user.id};
        return {
            acess_token: this.jwtService.sign(payload),
        };
    }
}