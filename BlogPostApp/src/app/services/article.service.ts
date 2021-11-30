import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:4000/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id:any): Observable<any> {
    return this.httpClient.get(`${baseURL}/read/${id}`);
  }

  create(data:any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.httpClient.put(`${baseURL}/update/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/delete/${id}`);
  }

  like(id:any,data:any): Observable<any> {
    return this.httpClient.put(`${baseURL}/like/${id}`,data);
  }

}
