import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PortalComponent } from './portal/portal.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { CadastrarCardComponent } from './restrito/cadastrar-card/cadastrar-card.component';
import { ListaServicoComponent } from './restrito/lista-servico/lista-servico.component';
import { AtualizaCardComponent } from './restrito/atualiza-card/atualiza-card.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
	{path: 'inicio', component: InicioComponent},
	{path: 'portal', component: PortalComponent},
	{path: 'login', component: LoginComponent},
	{path: 'restrito', component: RestritoComponent, children: [
		{path: 'cadastrar-servico', component: CadastrarCardComponent, canActivate: [AuthGuardGuard]},
		{path: 'lista', component: ListaServicoComponent, canActivate: [AuthGuardGuard]},
		{path: 'editar/:id', component: AtualizaCardComponent, canActivate: [AuthGuardGuard] }
	] },
	{path: 'cadastro', component: CadastroComponent},

		{path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
