import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateProductComponent} from './create-product/create-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductContentComponent } from './product-content/product-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    CreateProductComponent,
    ProductContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
