import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Decision } from 'app/shared/decision';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DecisionService {
  private apiUrl = 'api/decisions';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  decisions: Decision[] = [];

  constructor(private http: Http) { }

  getDecisions(): Promise<Decision[]> {
    return this.http
      .get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as Decision[])
      .then(decisions => this.decisions = decisions)
      .catch(this.handleError);
  }

  getDecision(id: number): Promise<Decision> {
    const url = `${this.apiUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Decision)
      .catch(this.handleError);
  }

  update(decision: Decision): Promise<Decision>{    
    const url = `${this.apiUrl}/${decision.id}`;

    return this.http
      .put(url, JSON.stringify(decision), {headers: this.headers})
      .toPromise()
      .then(() => decision)
      .catch(this.handleError);
  }

  createDecision(title: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let decision = new Decision(title);

    this.http
      .post(this.apiUrl, decision, options)
      .toPromise()
      .then(response => response.json().data as Decision)
      .then(decision => this.decisions.push(decision))
      .catch(this.handleError);
  }

  deleteDecision(decision: Decision) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${decision.id}`;

    this.http
      .delete(url, options)
      .toPromise()
      .then(response => {
        let index = this.decisions.indexOf(decision);
               
        if(index > -1) {
          this.decisions.splice(index, 1);
        }
      })
      .catch(this.handleError);
  }

  editDecision() {}

  private handleError(error: any) {
    console.error('Произошла ошибка', error);
    return Promise.reject(error.message || error);
  }
}