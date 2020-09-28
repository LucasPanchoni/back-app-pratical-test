import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PlansService } from './shared/plans.service';
import { Plans } from './shared/plans';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('plans')
export class PlansController {
    constructor(private plansService: PlansService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<Plans[]> {
        return this.plansService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Plans> {
        return this.plansService.getById(id);
    }
}
