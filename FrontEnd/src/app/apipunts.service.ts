import { Injectable } from '@angular/core';
import { Punt } from './punt';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApipuntsService {

  private punts:Punt[];
  private rutagran: string;
  private url = 'http://127.0.0.1:8000/apipunts/';
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get(this.url);
  }
}
