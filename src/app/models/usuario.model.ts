export class Usuario {
	public id?: number = 0;
	public cnpj?: string = '';
	public nomeFantasia: string = '';
	public nomeResponsavel: string = '';
	public nomeOng: string = '';
	public servicoOferecido: string = '';
	public email?: string = '';
	public telefone: string = '';
	public endereco: string = '';
	public senha: string = '';
	public confirmaSenha:string = '';

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
		confirmaSenha: string
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
