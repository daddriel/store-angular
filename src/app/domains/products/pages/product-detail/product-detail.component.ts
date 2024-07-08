import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {

  @Input() productId?: string;

  product = signal<Product | null>(null);
  cover = signal('')

  private productService = inject(ProductService);
  private cartService = inject(CartService)

  ngOnInit(): void {
    if(this.productId){
          this.productService.getOneProduct(this.productId)
          .subscribe({
            next: (product) =>{
              this.product.set(product)
              if(product.images.length>0){
                this.cover.set(product.images[0])
              }
            }
          })

    }
  }

  changeCover(image: string){
    this.cover.set(image);
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.cartService.addToCart(product);

    }
  }

}
