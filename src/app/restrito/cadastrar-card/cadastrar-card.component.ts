import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cadastrar-card',
  templateUrl: './cadastrar-card.component.html',
  styleUrls: ['./cadastrar-card.component.css']
})
export class CadastrarCardComponent implements OnInit {

	public card: Card = new Card(0, "", "","","", "", "");

  constructor(
		private _cardService: CardService,
		private router: Router
	) {}

	ngOnInit(): void {

	}

  cadastrar():void{
		this._cardService.cadastrarCard(this.card).subscribe(
		  _card =>{
				this.card = new Card(0, "", "","","", "", "");
				alert("Cadastro Efetuado com Sucesso")
			},
			_err => {
				alert("Erro ao cadastrar")
			}
		);


	this.router.navigate(["/restrito/lista"]);

 }

}
