import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
	providedIn: 'root',
})

export class CardService {

	private readonly url = 'api/cards';

	constructor(private _httpClient: HttpClient) {}

	getCard(id: number): Observable<Card> {
		const urlAtualizar = `${this.url}?id=${id}`;
		return this._httpClient.get<Card>(urlAtualizar);
	}

	getCards(): Observable<Card[]> {
		return this._httpClient.get<Card[]>(this.url);
	}

	cadastrarCard(card: Card): Observable<Card[]> {
		return this._httpClient.post<Card[]>(this.url, card);
	}

	atualizarCard(id: number, card: Card): Observable<Card[]> {
		const urlAtualizar = `${this.url}/${id}`;
		return this._httpClient.put<Card[]>(urlAtualizar, card);
	}

	removerCard(id: number): Observable<Card[]> {
		const urlDeletar = `${this.url}/${id}`;
		return this._httpClient.delete<Card[]>(urlDeletar);
	}
}
