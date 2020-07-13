import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateProductComponent} from './create-product/create-product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'product-create',
    component: CreateProductComponent
  },
  {
    path: 'product-edit/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
