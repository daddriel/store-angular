import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product;
  @Output() onAddCart = new EventEmitter<Product>();

  addToCartHandler(){
    console.log('emitiendo producto desde el hijo:', this.product);
    this.onAddCart.emit(this.product);
  }
}
