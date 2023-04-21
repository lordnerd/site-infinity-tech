import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { CadastrarCardComponent } from './restrito/cadastrar-card/cadastrar-card.component';
import { ListaServicoComponent } from './restrito/lista-servico/lista-servico.component';
import { AtualizaCardComponent } from './restrito/atualiza-card/atualiza-card.component';
import { GuardGuard } from './guard.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AtualizarCadastroComponent } from './cadastro/atualizar-cadastro/atualizar-cadastro.component';
import { ListaCadastroComponent } from './cadastro/lista-cadastro/lista-cadastro.component';

const routes: Routes = [
	{path: 'inicio', component: InicioComponent},
	{path: 'portal', component: PortalComponent},
	{path: 'login', component: LoginComponent},
	{path: 'restrito', component: RestritoComponent, children: [
		{path: 'cadastrar-servico', component: CadastrarCardComponent, canActivate: [GuardGuard]},
		{path: 'lista', component: ListaServicoComponent, canActivate: [GuardGuard]},
		{path: 'editar/:id', component: AtualizaCardComponent, canActivate: [GuardGuard] }
	] },
	{path: 'cadastro', component: CadastroComponent, children:[
		{path: 'cadastro', component: CadastroComponent, canActivate: [GuardGuard]},
		{path: 'lista-cadastro', component: ListaCadastroComponent, canActivate: [GuardGuard]},
		{path: 'atualizar/:id', component: AtualizarCadastroComponent, canActivate: [GuardGuard]}
	]},

		{path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
