import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUser(id?: number) {
    return this.http.get<any[] | any>(`https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ''}`);
  }
}
