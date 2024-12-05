import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Product } from '../common/product';
import { HeaderService } from './header.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient, private headerService : HeaderService ){}
  
  private apiUrl : string = `${environment.apiUrl}/products`;
  

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl, {headers: this.headerService.headers});
  }

  createProduct(formData:any):Observable<any>{
    return this.httpClient.post<Product>(this.apiUrl,formData, {headers: this.headerService.headers});
  }

  deleteProductById(id:number):Observable<any>{
    return this.httpClient.delete(this.apiUrl+"/"+id , {headers: this.headerService.headers});
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.apiUrl+"/"+id, {headers: this.headerService.headers});
  }
  searchProducts(query: string): Observable<Product[]> { 
    return this.httpClient.get<Product[]>(`${this.apiUrl}/search`, 
      { params: { query }, headers: this.headerService.headers });
    }
}