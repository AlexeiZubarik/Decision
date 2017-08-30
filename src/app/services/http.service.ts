import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';


@Injectable()
export class HttpService {
  public host: string;

  constructor(private http: Http) {
    this.host = environment.host;
  }

  public get(route: string) {
    return this.http.get(this.host + route);
  }
}
