import { Injectable } from '@nestjs/common';
import { Plans } from './plans';

@Injectable()
export class PlansService { 
    plans: Plans[] = [
        {id: 1, title: 'Extra Small', desc: '5 GB', details: 
        'Live sport, data free.​\nData-free music streaming.\nStream live, fast and data-free.\nData-free on the ACME mobile network.'
        , price: '$10.00'},
        {id: 2, title: 'Small', desc: '20 GB', details: 
        'Live sport, data free.​\nData-free music streaming.\nStream live, fast and data-free.\nData-free on the ACME mobile network.'
        , price: '$25.00'},
        {id: 3, title: 'Medium', desc: '60 GB', details: 
        'Live sport, data free.​\nData-free music streaming.\nStream live, fast and data-free.\nData-free on the ACME mobile network.'
        , price: '$50.00'},
        {id: 4, title: 'Large', desc: '200 GB', details: 
        'Live sport, data free.​\nData-free music streaming.\nStream live, fast and data-free.\nData-free on the ACME mobile network.'
        , price: '$75.00'},
    ]

    getAll() {
        return this.plans;
    }

    getById(id: number) {
        return this.plans.find((value) => value.id == id);
    }

}