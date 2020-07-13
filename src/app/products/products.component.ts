import {Component, OnInit} from '@angular/core';
import {IProduct} from '../IProduct';
import {ProductService} from '../service/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  message: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.productService.shouldRefresh.subscribe(result => (this.getAll()));
  }

  getAll(): void {
    this.productService
      .getListProduct()
      .subscribe(result => (this.products = result), error => (this.products = []));
  }

  deleteProduct(id: number): void {
    if (confirm('I want to delete ?')) {
      this.productService.deleteProduct(id).subscribe(result => {
        this.productService.shouldRefresh.next();
      });
    }
  }
}
