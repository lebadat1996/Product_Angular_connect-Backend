import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {IProduct} from '../IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = 'http://localhost:8080/api/product';
  shouldRefresh = new Subject<any>();

  constructor(private httpClient: HttpClient) {
  }

  getListProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.API_URL);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.API_URL}/${id}`);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.API_URL, product);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(this.API_URL, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
