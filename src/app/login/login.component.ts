import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	login:{email:string, cnpj?:string, senha:string} = {email: '', cnpj: '', senha: ''}

	constructor(private _AuthServiceService: AuthServiceService, private _router:Router) {}

	ngOnInit(): void {}

	submit(){

	}
}

