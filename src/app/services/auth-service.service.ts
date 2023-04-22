import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
	private url = ' http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

	login(values: {email:string, senha:string}){
		return this.http.get<Cadastro>(this.url + values.email);
	}

	clear(){
		localStorage.clear()
	}

	isAutenticated(){
		return (localStorage.getItem('usuario')! == null ? true: false);
	}
}
