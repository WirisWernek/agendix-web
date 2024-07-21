import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment.development'
import { LoginRequestModel } from '../models/login-request.model'
import { LoginResponseModel } from '../models/login-response.model'

@Injectable()
export class LoginStore {
   private baseUrl = `${environment.URL}/authentication`

   private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
   })

   constructor(private http: HttpClient) {}

   login(dto: LoginRequestModel): Observable<LoginResponseModel> {
      return this.http.post<LoginResponseModel>(`${this.baseUrl}/login`, dto, { headers: this.headers })
   }

   //   resetSenha(resetSenhaDto: any): Observable<any> {
   //     return this.http.post<any>(this.baseUrl+'reset-senha', resetSenhaDto, {headers: this.headers})
   //   }
}
