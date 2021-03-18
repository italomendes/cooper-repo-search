import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Repository } from '../../models/repository.model';
import { catchError, mergeMap } from "rxjs/operators";
;
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  
  url: string = "https://api.github.com/users/";

  constructor(private http: HttpClient) { }

  getRepositoriesByUser(userName: string): Observable<Repository[]> {
    return this.http.get<any>(`${this.url}${userName}/repos`).pipe(
      mergeMap(result => {
        return of(
          result.map((respositorio: any) => {
            return {
              name: respositorio.name,
              description: respositorio.description,
              created_at: respositorio.created_at,
              svn_url: respositorio.svn_url
            };
          })
        );
      }),
      catchError(err => {
        if (err.error.message === "Not Found") {
          return of(null);
        }
        return of(err.error.message);
      })
    );
  }
}
