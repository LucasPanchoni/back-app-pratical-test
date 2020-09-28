import { UserChangeplan } from './userChangePlan';
import { Injectable } from '@nestjs/common';
import { Users } from './users';
import { UsersDTO } from './usersDTO';

@Injectable()
export class UsersService {

    users: Users[] = [
        {id: 1, login: 'teste', planId: 0, password: '123'},
        {id: 2, login: 'teste2', planId: 0, password: '123'},
        {id: 3, login: 'teste3', planId: 0, password: '123'},
    ]

    getAll() {
        return this.users;
    }

    getById(id: number) {
        return this.users.find((value) => value.id == id);
    }

    getByLogin(login: string) {
        return this.users.find((value) => value.login == login);
    }

    getDTOByLogin(login: string) {
        const user = this.users.find((value) => value.login == login);
        return this.toDTO(user);
    }

    changePlan(changePlan: UserChangeplan) {
        const payload = {loginUser: changePlan.loginUser, idPlan: changePlan.idPlan};
        this.getByLogin(payload.loginUser).planId = payload.idPlan;
        return this.getDTOByLogin(payload.loginUser);
    } 

    toDTO(user: Users){
        const userDTO: UsersDTO = {id: user.id, login: user.login, planId: user.planId };
        return userDTO;
    }

}
