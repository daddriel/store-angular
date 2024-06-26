import { Component, signal } from '@angular/core';

import {ProductComponent} from '../../../products/components/product/product.component'
import { Product } from '../../../shared/models/product.model'
import { HeaderComponent } from '../../../shared/components/header/header.component'
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'http://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'http://picsum.photos/640/640?r=3',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'http://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'http://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'http://picsum.photos/640/640?r=3',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'http://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'http://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'http://picsum.photos/640/640?r=3',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'http://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      }

    ]
    this.products.set(initProducts);
  }
  fromChild(event: string){
    console.log('estamos en el padre')
    console.log(event)
  }
}
