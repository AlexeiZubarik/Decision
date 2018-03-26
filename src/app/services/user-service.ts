import { Injectable} from '@angular/core';
import {Response, Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CoreService } from 'app/services/core.service';
import { User } from 'app/shared/user';
import { AuthenticationService } from 'app/services/authentification-service';
import { AuthHttp } from 'angular2-jwt';



@Injectable()
export class UserService extends CoreService {
  private user: User = new User();
  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private authentificationService: AuthenticationService) {
    super();
  }
  register(user: User){
    return this.http.post(`${this.webService}registration`,user).map((response:Response) => response);
  }
}