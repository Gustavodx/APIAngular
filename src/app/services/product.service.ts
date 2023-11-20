import { Injectable } from '@angular/core';

//

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/alumno';



@Injectable({
  providedIn: 'root'
  })


  export class ProductService {
  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    const headers = {'Autorization ': 'Bearer my-token' }
  return this.httpClient.get(baseURL,{headers});
  }

  read(id:any): Observable<any> {
  return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data:any): Observable<any> {
  return this.httpClient.post(baseURL, data);
  }

  update(id:number, data:any): Observable<any> {
  return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id:number): Observable<any> {
  return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
  return this.httpClient.delete(baseURL);
  }

  searchByName(name:string): Observable<any> {
  return this.httpClient.get(`${baseURL}?name=${name}`);
    }
}
  