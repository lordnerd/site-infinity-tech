import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro.model';

@Injectable({
	providedIn: 'root',
})

export class CadastroService {

	private url = 'api/cadastro';

	constructor(private _httpClient: HttpClient) {}

	getCadastro(id: any): Observable<Cadastro> {
		const urlAtualizar = `${this.url}?id=${id}`;
		return this._httpClient.get<Cadastro>(urlAtualizar);
	}

	getCadastros(): Observable<Cadastro[]> {
		return this._httpClient.get<Cadastro[]>(this.url);
	}

	cadastrarUsuario(cadastro: Cadastro): Observable<Cadastro[]> {
		return this._httpClient.post<Cadastro[]>(this.url, cadastro);
	}
}
