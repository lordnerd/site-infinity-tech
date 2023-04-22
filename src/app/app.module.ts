import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*Importações do Angular Material*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PortalComponent } from './portal/portal.component';
import { MenuPortalComponent } from './portal/menu-portal/menu-portal.component';
import { CardComponent } from './portal/card/card.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { AtualizaCardComponent } from './restrito/atualiza-card/atualiza-card.component';
import { CadastrarCardComponent } from './restrito/cadastrar-card/cadastrar-card.component';
import { ListaServicoComponent } from './restrito/lista-servico/lista-servico.component';
import { MenuRestritoComponent } from './restrito/menu-restrito/menu-restrito.component';

import { CardService } from './services/card.service';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RodapeComponent,
    PortalComponent,
    MenuPortalComponent,
    CardComponent,
    LoginComponent,
    RestritoComponent,
    AtualizaCardComponent,
    CadastrarCardComponent,
    ListaServicoComponent,
    MenuRestritoComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
