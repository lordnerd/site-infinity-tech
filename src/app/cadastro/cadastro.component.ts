import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../models/cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastro: Cadastro = new Cadastro(0, 0, "","","", "", "", "", "", "");

  constructor(
		private _cadastroService: CadastroService,
		private router: Router
	) {}

	ngOnInit(): void {

	}

  cadastrarUsuario():void{
		this._cadastroService.cadastrarUsuario(this.cadastro).subscribe(
		  _cadastro =>{
				this.cadastro = new Cadastro(0, 0, "","","", "", "","", "", "");
				alert("Cadastro Efetuado com Sucesso")
			},
			_err => {
				alert("Erro ao cadastrar")
			}
		);


	this.router.navigate(["/cadastro/lista-cadastro"]);

 }
}
