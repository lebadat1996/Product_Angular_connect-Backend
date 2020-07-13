import {Component, OnInit} from '@angular/core';
import {IProduct} from '../IProduct';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  products: IProduct[] = [];
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      productCode: ['', [Validators.required, Validators.minLength(5)]],
      comment: ['', [Validators.required, Validators.minLength(5)]]
    });
  }


  onSubmit(): void {
    if (this.productForm.valid) {
      const {value} = this.productForm;
      this.productService.createProduct(value).subscribe(result => {
        this.products.unshift(result);
        this.productForm.reset({
          name: '',
          productCode: '',
          comment: ''
        });
        this.productService.shouldRefresh.next('gui thong diep gi do');
      });
    }
  }
}
