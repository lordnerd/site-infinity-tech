import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { BannerComponent } from './banner/banner.component';
import { ParaQuemComponent } from './para-quem/para-quem.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, children: [
    {path: 'banner', component: BannerComponent},
    {path: 'para-quem', component: ParaQuemComponent},
    {path: 'quem-somos', component: QuemSomosComponent}
  ]},

  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
