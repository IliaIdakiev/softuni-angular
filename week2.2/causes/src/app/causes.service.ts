import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICause } from './shared/interfaces/cause';

@Injectable({
  providedIn: 'root'
})
export class CausesService {
  causes: ICause[];

  selectedCause: ICause;

  constructor(private http: HttpClient) { }

  loadCauses() {
    this.http.get<ICause[]>('http://localhost:3000/causes').subscribe(causes => {
      this.causes = causes;
    });
  }

  donate(amount: number) {
    return this.http.put<ICause>(`http://localhost:3000/causes/${this.selectedCause._id}`, {
      body: { collectedAmount: this.selectedCause.collectedAmount + amount }
    });
  }
}
