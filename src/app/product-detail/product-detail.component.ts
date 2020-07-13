import {Component, OnInit} from '@angular/core';
import {IProduct} from '../IProduct';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isShow = false;
  message: string;
  productId: number;
  productForm: FormGroup = new FormGroup({
     id: new FormControl(''),
    name: new FormControl(''),
    productCode: new FormControl(''),
    comment: new FormControl('')
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.id;
      this.productService.getProductById(this.productId).subscribe(result => {
        this.productForm.setValue(result);
      });
    });
  }

  onSubmit(): void {
    if (this.productId) {
      this.productService.updateProduct(this.productForm.value).subscribe(result => {
        this.isShow = true;
        this.message = 'update success';
      });
    } else {
      this.productService.createProduct(this.productForm.value).subscribe(result => {
        this.isShow = true;
        this.message = 'create success';
      });
    }
  }
}
