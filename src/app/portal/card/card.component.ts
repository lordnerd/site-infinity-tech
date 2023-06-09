import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {

	public cards: Card[] = [];

	constructor(private cardService: CardService){}

	ngOnInit(): void {
			this.listarCards()
	}

	listarCards(): void{
		this.cardService.getCards().subscribe((retornaCard) => {
			this.cards = retornaCard.map((item) => {
				return new Card(
					item.id,
					item.servico,
					item.dataCriacao,
					item.sede,
					item.localidade,
					item.descricao,
					item.horarioFuncionamento
				)
			})
		})
	}
}


