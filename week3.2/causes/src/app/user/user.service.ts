import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: { username: string; password: string } = null;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor() {
    const currentUser = localStorage.getItem('current-user');
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  }

  login(username: string, password: string) {
    localStorage.setItem('current-user', JSON.stringify({ username, password }));
    this.currentUser = { username, password };
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('current-user');
  }
}
