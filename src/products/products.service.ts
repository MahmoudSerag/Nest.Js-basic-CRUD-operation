import { Product } from './productModel';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  // Create new product
  public insertNewProduct(
    name: string,
    title: string,
    description: string,
    price: number,
  ): Product {
    const randomId: number = Math.floor(Math.random() * 99999999999999);
    const productId: string = randomId.toString();
    const newProduct: Product = new Product(
      productId,
      name,
      title,
      description,
      price,
    );
    this.products.push(newProduct);
    return newProduct;
  }

  public getAllProducts(): Product[] | string {
    return this.products.length ? this.products : 'No Products Yet.';
  }

  public getProductById(id): Product | string {
    let isExist = false;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        isExist = true;
        return this.products[i];
      }
    }

    if (!isExist)
      throw new NotFoundException(`No Product Found With id: ${id}`);
  }

  public updateProductById(
    id,
    title: string,
    name: string,
    description: string,
    price: number,
  ): Product | string {
    const product = this.getProductById(id);
    if (typeof product === 'string')
      throw new NotFoundException(`No Product Found With id: ${id}`);

    if (title) product.title = title;

    if (name) product.name = name;

    if (description) product.description = description;

    if (price) product.price = price;

    return product;
  }

  deleteProductById(id): Product | string {
    const product = this.getProductById(id);
    if (typeof product === 'string')
      throw new NotFoundException(`No Product Found With id: ${id}`);

    for (let i = 0; i < this.products.length; i++) {
      const currentProduct: Product = this.products[i];
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
        return currentProduct;
      }
    }
  }
}
