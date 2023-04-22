export class Cadastro{
	id: number = 0;
	cnpj: string = '';
	nomeFantasia: string = '';
	nomeResponsavel: string = '';
	nomeOng: string = '';
	servicoOferecido: string = '';
	email: string = '';
	telefone: string = '';
	endereco: string = '';
	senha: string = '';
	confirmaSenha: string = '';

	constructor(
	id: number,
	cnpj: string,
	nomeFantasia: string,
	nomeResponsavel: string ,
	nomeOng: string ,
	email: string ,
	telefone: string,
	endereco: string,
	senha: string,
	confirmaSenha: string,
	){
		this.id = id;
		this.cnpj = cnpj;
		this.nomeFantasia = nomeFantasia;
		this.nomeResponsavel = nomeResponsavel;
		this.nomeOng = nomeOng;
		this.email = email;
		this.telefone = telefone;
		this.endereco = endereco;
		this.senha = senha;
		this.confirmaSenha = confirmaSenha;
	}
}


