import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-lista-servico',
  templateUrl: './lista-servico.component.html',
  styleUrls: ['./lista-servico.component.css']
})
export class ListaServicoComponent implements OnInit {

  public cards: Card[] = [ ];
	public card: Card = new Card(0,"","","","","","");

	constructor(
		private _cardService: CardService,
		private router: Router,

	) {}

	ngOnInit(): void {
		this.listarServicos();
	}

	listarServicos(): void {
		this._cardService.getCards().subscribe((retornaCard) => {
			this.cards = retornaCard.map((item) => {
				return new Card(
					item.id,
					item.servico,
					item.dataCriacao,
					item.sede,
					item.localidade,
					item.descricao,
					item.horarioFuncionamento
				);
			});
		});
	}

	excluir(id: number) {
		this._cardService.removerCard(id).subscribe(
			_vaga => {
				this.listarServicos();
			},
			_err => {
				console.log('erro ao Excluir');
			}
		);

		// window.location.href = "/restrito/lista";
		this.router.navigate(['/restrito/lista']);
	}

}
