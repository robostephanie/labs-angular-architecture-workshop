import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(
    private readonly shoppingCartService: ShoppingCartService,
  ) { }

  public addToCart(): void {
    this.shoppingCartService.addToCart();
  }
}
