import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ruta } from './ruta';

@Injectable({
  providedIn: 'root'
})
export class ApirutesService {

  private ruta:Ruta[];
  private rutagran: string;
  private url = 'http://127.0.0.1:8000/apirutes/';
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get(this.url);
  }

  public getruta(id:Number) :Observable<any>{
    return this.http.get(this.url+id);
  }
}
