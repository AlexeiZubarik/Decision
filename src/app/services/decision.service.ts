import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Decision, DecisionArray, CriteriaArray} from 'app/shared/decision';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';
import { CoreService } from 'app/services/core.service';
import { User } from 'app/shared/user';
import { Jsonp } from '@angular/http/src/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfigConsts, AuthHttp } from 'angular2-jwt';
import { DecisionWithCompareArray } from 'app/shared/DecisionWithCompareArray';

@Injectable()
export class DecisionService extends CoreService{
  private apiUrl = 'api/decisions';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  decisions: Decision[] = [];
  users: User[] = [];

  constructor(private http: Http,
    private authHttp: AuthHttp) { super()}

  getDecisions() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    return this.http.post(`${this.webService}getDecisions`," ",{headers})
      .map(response => response.json() as Decision[])
      .catch(this.handleError);
  }

  getDecision(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    var id : number = +localStorage.getItem("idDecision");
    return this.authHttp.post(`${this.webService}getDecision`, id,{headers})
    .map(response => response.json() as Decision);
  }

  getCriteriaArrayName()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    var id : number = +localStorage.getItem("idDecision");
    return this.authHttp.post(`${this.webService}getCriteriaArrayName`, id,{headers})
    .map(response => response.json() as string[]);
  }

  sendCriteriaArrayName(array:string[])
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    array.push(localStorage.getItem("idDecision"));
    console.log(array);
    return this.authHttp.post(`${this.webService}sendCriteriaArrayName`, array,{headers});
  }

  getHtml(html:string)
  {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append('Access-Control-Allow-Credentials', 'true');
    return this.http.post(html,headers)
    .map(response => response.json() as string);
  }

  editAlternative(alternative:DecisionArray)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    return this.authHttp.post(`${this.webService}editAlternative`, alternative,{headers});
  }

  editCriteria(criteria:CriteriaArray)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    return this.authHttp.post(`${this.webService}editCriteria`, criteria,{headers});
  }

  getDecisionById(id:number){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    return this.authHttp.post(`${this.webService}getDecision`, id,{headers})
    .map(response => response.json() as Decision);
  }

  getCriteriaArray(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    var id : number = +localStorage.getItem("idDecision");
    return this.authHttp.post(`${this.webService}getCriteriaArray`,id,{headers})
    .map(response => response.json() as string[]);
  }

  setDecision(decision:Decision){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    return this.authHttp.post(`${this.webService}setDecision`, decision,{headers})
    .map(response => response.json() as boolean);
  }

  setDecisionWithoutAuth(decision:Decision)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.webService}setDecisionWithoutToken`, decision,{headers})
    .map(response => response.json() as boolean);
  }

  getDecisionWithoutAuth(decision:Decision)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.webService}getDecisionWithoutToken`, decision,{headers})
    .map(response => response.json() as Decision);
  }

  sendPairedCompareCriteria(compare: number[][]){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    headers.append('idDecision',localStorage.getItem("idDecision"));
    return this.authHttp.post(`${this.webService}sendPairedCompareCriteria`, compare,{headers});
  }

  sendPairedCompareCriteriaWithoutAuth(compare: DecisionWithCompareArray){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.webService}sendPairedCompareCriteriaWithoutAuth`, compare,{headers})
    .map(response => response.json() as Decision);
  }

  deleteAlternative(id: number)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    return this.authHttp.post(`${this.webService}deleteAlternative`, id,{headers})
    .map(response => response.json() as number);
}

deleteCriteria(id: number)
{
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
  return this.authHttp.post(`${this.webService}deleteCriteria`, id,{headers})
  .map(response => response.json() as number);
}


  sendPairedCompareCriterias(compare: number[][]){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    headers.append('idDecision',localStorage.getItem("idDecision"));
    return this.authHttp.post(`${this.webService}sendPairedCompareCriterias`, compare,{headers})
    .map(response => response.json() as boolean);

  }

  update(decision: Decision) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    const url = `/Decision`;

    return this.http
      .put(url, JSON.stringify(decision))
      //.map(response => response.json().data as Decision)
      //.map(decision => this.decisions.push(decision))
      .catch(this.handleError);
  }
  
  registration(user: User)
  {
    return this.http
    .post(`${this.webService}registration`,user)
    .catch(this.handleError)
    .subscribe();
  
  }

  createDecision(decision: Decision) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return this.http
      .post(this.apiUrl, decision)
      //.map(response => response.json().data as Decision)
     // .map(decision => this.decisions.push(decision))
      .catch(this.handleError)
      .subscribe();
  }

  deleteDecision(decision: Decision) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${decision._id}`;

    return this.http
      .delete(url)
      .catch(this.handleError);
  }

  editDecision() {}

  private handleError(error: any) {
    console.error('Произошла ошибка', error);
    return Observable.throw(error.message || error);
  }

  saveDecision(name:String, note:String)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    return this.authHttp.post(`${this.webService}saveDecision`, JSON.stringify({name,note}),{headers}).map(response => response.json());
  }
  
  createAlternative(name:String)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    var id = localStorage.getItem("idDecision");
    return this.http.post(`${this.webService}saveAlternative`, JSON.stringify({name,id}),{headers}).map(response => response.json() as DecisionArray);
    
  }

  createCriteria(name:String)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME));
    var id = localStorage.getItem("idDecision");
    return this.http.post(`${this.webService}saveCriteria`, JSON.stringify({name,id}),{headers});
    
  }

}
