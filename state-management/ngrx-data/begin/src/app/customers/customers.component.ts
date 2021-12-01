import { Component, OnInit } from '@angular/core';

import { Customer } from '../core/model/customer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CustomersService } from './customers.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title = 'Customers';

    customers$: Observable<Customer[]>;
    loading$: Observable<boolean>;

    constructor(
        private readonly customersService: CustomersService
    ) {
        this.loading$ = this.customersService.loading$;
    }

    public ngOnInit(): void {
        this.getCustomers();
    }

    private getCustomers(): void {
        this.customers$ = this.customersService.getAll();
    }
}
