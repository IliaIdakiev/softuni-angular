import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICause } from '../shared/interfaces/cause';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CausesService {
  causes: ICause[];

  readonly selectedCause: ICause;

  constructor(private http: HttpClient) { }

  load(id?: string) {
    return this.http.get<ICause[] | ICause>(`causes${id ? `/${id}` : ''}`).pipe(
      tap((causes) => {
        if (id) {
          (this as any).selectedCause = causes[0];
        } else {
          this.causes = [].concat(causes);
        }
      })
    );
  }

  create(cause: any) {
    return this.http.post<ICause>('causes', cause);
  }

  donate(donatedAmount: number) {
    return this.http.put<ICause>(`causes/${this.selectedCause._id}`, { donatedAmount });
  }

  selectCause(cause: ICause) {
    (this as any).selectedCause = cause;
  }
}
