import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DadesusuariService {

  constructor( private http: HttpClient) { }

  registra(userData): Observable <any> {

    return this.http.post('http://descobreixportbou.pythonanywhere.com/api/users/', userData);

  }
  log(userData): Observable <any> {

    return this.http.post('http://descobreixportbou.pythonanywhere.com/api/auth/', userData);

  }
}
