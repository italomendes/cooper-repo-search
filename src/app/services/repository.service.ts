import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  
  url: string = "https://api.github.com/users/";

  constructor(private http: HttpClient) { }

  getRepositoriesByUser(userName: string): Observable<any[]> {
    return this.http.get<any>(`${this.url}${userName}/repos`);
  }
}
