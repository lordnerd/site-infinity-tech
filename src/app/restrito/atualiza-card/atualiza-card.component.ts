import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import {CardService} from 'src/app/services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-atualiza-card',
  templateUrl: './atualiza-card.component.html',
  styleUrls: ['./atualiza-card.component.css']
})
export class AtualizaCardComponent implements OnInit {

  public cardId: number = 0;
	public card: Card = new Card(0,"","","","","","");

  constructor(
		private _cardService: CardService,
		private router: Router,
		private _activatedRoute: ActivatedRoute
	) {
		this._activatedRoute.params.subscribe(params => this.cardId = params['id']);
	}

  ngOnInit(): void {
		this.listarProduto();
  }

	listarProduto():void{
		this._cardService.getCard(this.cardId).subscribe(
			(res: any) => {
				this.card = new Card(
					res[0].id,
					res[0].servico,
					res[0].dataCriacao,
					res[0].sede,
					res[0].localidade,
					res[0].descricao,
					res[0].horarioFuncionamento
				);
		}
		);
	}

	atualizar(id:number){
		this._cardService.atualizarCard(id, this.card).subscribe(
			_card => {this.card = new Card(0,"","","","","","")},
			_err => {alert("Erro ao atualizar")}
		);

		this.router.navigate(['restrito/lista']);
	}
}
