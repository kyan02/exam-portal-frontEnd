import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AttemptsService {

  constructor(private _http : HttpClient) { }

  public getAllAtempts(){
    return this._http.get(`${baseUrl}/attempts/`);
  }
}
