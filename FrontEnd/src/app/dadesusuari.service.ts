import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DadesusuariService {

  constructor( private http: HttpClient) { }

  registra(userData): Observable <any> {

    return this.http.post('http://127.0.0.1:8000/api/users/', userData);

  }
  log(userData): Observable <any> {

    return this.http.post('http://127.0.0.1:8000/api/auth/', userData);

  }
}
