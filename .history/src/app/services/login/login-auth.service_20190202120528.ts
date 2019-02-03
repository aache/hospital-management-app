import { Injectable } from "@angular/core";
import { AppSettings } from "src/app/app-settings";
import { Student } from "src/app/models/Student";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILogin } from "src/app/models/ILogin";
@Injectable({
  providedIn: "root"
})
export class LoginAuthService {
  private logindata;
  private _urlLogin: string = AppSettings.API_ENDPOINT_MOCK + "mock-login-auth";

  constructor(private http: HttpClient) {}
  loginAuth(u: string, p: string): Observable<boolean> {
    const httpParam = new HttpParams().set("username", u).set("password", p);
    const httpOutput = this.http.get<boolean>(this._urlLogin, {
      headers: null,
      params: httpParam
    });
    return httpOutput;
  }
  printLogin(username: String, password: String) {
    console.log(username);
    console.log(password);
  }
}
