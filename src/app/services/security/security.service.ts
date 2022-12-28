import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grant } from 'src/app/models/grant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private apiUrl = `${environment.urlLoggin}api`;

  constructor(private http: HttpClient) { }

  isValid(token: string): Observable<{ valid: boolean }> {
    return this.http.post<{ valid: boolean }>(`${this.apiUrl}/isValidToken`, { token });
  }

  getGrants(modulo: number): Observable<{ points: Grant[] }> {
    const httpOptions = { withCredentials: true };
    const body = { modulo };
    return this.http.post<{ points: Grant[] }>(`${this.apiUrl}/authorized`, body, httpOptions);
  }
}
