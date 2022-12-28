import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }
  
  ImportControl(json:Factura[], entityId: number): Promise<Factura[]>{
    return this.http.post<Factura[]>(
      `${environment.apiUrl}/control/save`, this.buildJson(json,entityId)
    ).toPromise();
  }

  buildJson(Json:Factura[], entityId: number): Factura[]{
    return Json.map((data) => {
      data.consMpio = entityId;
      return data;
    });
}
}
