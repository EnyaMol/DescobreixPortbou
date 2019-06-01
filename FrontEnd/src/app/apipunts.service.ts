import { Injectable } from '@angular/core';
import { Punt } from './punt';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApipuntsService {

  private punts: Punt[];
  private rutagran: string;
  private url = 'http://descobreixportbou.pythonanywhere.com/apipunts/';
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get(this.url);
  }
}
