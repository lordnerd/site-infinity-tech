import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuemSomosComponent } from './inicio/quem-somos/quem-somos.component';
import { ParaQuemComponent } from './inicio/para-quem/para-quem.component';
import { BannerComponent } from './inicio/banner/banner.component';
import { PrestacaoServicosComponent } from './inicio/prestacao-servicos/prestacao-servicos.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    QuemSomosComponent,
    ParaQuemComponent,
    BannerComponent,
    PrestacaoServicosComponent,
    RodapeComponent,
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
