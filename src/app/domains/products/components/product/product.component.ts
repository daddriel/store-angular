import { CurrencyPipe, UpperCasePipe,DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, DatePipe, ReversePipe,TimeAgoPipe, RouterLinkWithHref],
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
