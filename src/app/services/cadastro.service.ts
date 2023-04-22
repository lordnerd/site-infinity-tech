import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../models/cadastro.model';

@Injectable({
	providedIn: 'root',
})

export class CadastroService {

	private url = 'http://localhost:3000/cadastros';

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

	atualizarUsuario(id: any, cadastro: Cadastro): Observable<Cadastro[]> {
		const urlAtualizar = `${this.url}/${id}`;
		return this._httpClient.put<Cadastro[]>(urlAtualizar, cadastro);
	}

	removerUsuario(id: any): Observable<Cadastro[]> {
		const urlDeletar = `${this.url}/${id}`;
		return this._httpClient.delete<Cadastro[]>(urlDeletar);
	}
}
