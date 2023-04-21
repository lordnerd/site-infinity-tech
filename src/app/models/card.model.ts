export class Card{
	id: number = 0;
	servico: string = '';
	dataCriacao: string = '';
	sede: string = '';
	localidade: string = '';
	descricao: string = '';
	horarioFuncionamento: string = '';

	constructor(
	id: number,
	servico: string,
	dataCriacao: string,
	sede: string ,
	localidade: string ,
	descricao: string ,
	horarioFuncionamento: string
	){
		this.id = id;
		this.servico = servico;
		this.dataCriacao = dataCriacao;
		this.sede = sede;
		this.localidade = localidade;
		this.descricao = descricao;
		this.horarioFuncionamento = horarioFuncionamento;
	}
}


