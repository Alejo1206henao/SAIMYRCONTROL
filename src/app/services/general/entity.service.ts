import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from 'src/app/models/entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) { }

  get(): Observable<Entity> {
    return this.http.get<Entity>(`${environment.apiUrlPublic}/entity`);
  }
}
