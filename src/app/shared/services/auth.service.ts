import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt'
import { Observable, of } from 'rxjs'
import { TokenData } from './../config/token-data.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	decodedToken$!: Observable<TokenData>
	constructor(private router: Router, private http: HttpClient) {}
 
	getToken() {
	   return localStorage.getItem('token')
	}
 
	getIdUsuario() {
	   return this.decodePayloadJWT()?.decode.id
	}
 
	getNomeUsuario() {
	   const name = this.decodePayloadJWT()?.decode.name
	   if (!name) return ''
	   const splittedName = name.split(' ')
 
	   return `${splittedName[0]} ${splittedName.length >= 2 ? splittedName.pop() : ''}`
	}
 
	logout() {
	   localStorage.removeItem('token')
	   this.decodedToken$ = {} as Observable<TokenData>
	}
 
	decodePayloadJWT() {
	   const token = this.getToken()
 
	   if (token) {
		  const helper = new JwtHelperService()
 
		  const decodedToken = helper.decodeToken(token)
		  const expirationDate = helper.getTokenExpirationDate(token)
		  const isExpired = helper.isTokenExpired(this.getToken())
 
		  if (isExpired) {
			 this.router.navigateByUrl('/')
			 return null
		  }
		  this.decodedToken$ = of(decodedToken)
		  return { decode: decodedToken, expire: expirationDate, isExpired: isExpired }
	   } else {
		  this.router.navigateByUrl('/')
		  return null
	   }
	}
}
