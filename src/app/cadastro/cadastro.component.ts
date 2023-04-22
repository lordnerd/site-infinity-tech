import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';
import { Cadastro } from '../models/cadastro.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


	public cadastro: Cadastro = new Cadastro(0, "","","","","","","","","");

  constructor(
		private _cadastroService: CadastroService,
		private router: Router
	) {}

	ngOnInit(): void {

	}

  cadastrar():void{
		this._cadastroService.cadastrarUsuario(this.cadastro).subscribe(
		  _cadastro =>{
				this.cadastro = new Cadastro(0, "", "","","", "", "","","","");
				alert("Cadastro Efetuado com Sucesso")
			},
			_err => {
				alert("Erro ao cadastrar")
			}
		);


	this.router.navigate(["/login"]);

 }

 }

