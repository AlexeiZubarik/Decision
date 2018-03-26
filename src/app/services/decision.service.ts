import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Decision } from 'app/shared/decision';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DecisionService {
  private apiUrl = 'api/decisions';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  decisions: Decision[] = [];

  constructor(private http: Http) { }

  getDecisions(): Observable<Decision[]> {
    return this.http.get(this.apiUrl)
      .map(response => response.json().data as Decision[])
      .catch(this.handleError);
  }

  getDecision(id: number): Observable<Decision> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get(url)
      .map(response => response.json().data as Decision)
      .catch(this.handleError);
  }

  update(decision: Decision): Observable<Decision> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    const url = `http://localhost:51825/api/Decision`;

    return this.http
      .put(url, JSON.stringify(decision), options)
      .map(response => response.json().data as Decision)
      .map(decision => this.decisions.push(decision))
      .catch(this.handleError);
  }

  createDecision(decision: Decision) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return this.http
      .post(this.apiUrl, decision, options)
      .map(response => response.json().data as Decision)
      .map(decision => this.decisions.push(decision))
      .catch(this.handleError)
      .subscribe();
  }

  deleteDecision(decision: Decision) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${decision.id}`;

    return this.http
      .delete(url, options)
      .catch(this.handleError);
  }

  editDecision() {}

  private handleError(error: any) {
    console.error('Произошла ошибка', error);
    return Observable.throw(error.message || error);
  }
}
