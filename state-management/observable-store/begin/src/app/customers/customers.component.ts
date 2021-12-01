import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../core/model/customer';
import { CustomersService } from './customers.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title = 'Customers';

    customers$: Observable<Customer[]>;

    constructor(
        private readonly customersService: CustomersService,
    ) {}

    ngOnInit() {
        this.getCustomers();
    }

    private getCustomers(): void {
        this.customers$ = this.customersService.getAll();
    }
}
