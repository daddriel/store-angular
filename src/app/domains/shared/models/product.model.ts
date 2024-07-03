import {Category} from './category.model'

export interface Product {
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
  id: number;
  creationAt: string;
  updatedAt: string;
}
