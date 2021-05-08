import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { config } from '../app-config';
import { Token } from './token';
import { catchError, tap ,filter, switchMap, take, map, mapTo, } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser!: any ;
  private tokenObj:Token;
  

  constructor(private http:HttpClient) {
    this.tokenObj={jwt:"",refreshToken:""};
   }
  
  login(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${config.apiUrl}/authenticate`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError((error) => {
          console.log(error);
          return of(false);
          
        }));
  }


  logout() :Observable<any>{
    return this.http.post<any>(`${config.apiUrl}/logout`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      map(() => true),
      catchError(error => {
        console.log(error);
        return of(false);
        
      } ));
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    this.tokenObj.jwt!=this.getJwtToken();
    this.tokenObj.refreshToken!=this.getRefreshToken();
    return this.http.post<any>(`${config.apiUrl}/authenticate/refreshtoken`,{
      "RefreshToken":this.tokenObj.refreshToken }
    ,
    {headers:new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Accept','application/json')
    }).pipe(tap((tokens: Token) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  getJwtToken(){
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Token) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Token) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}




