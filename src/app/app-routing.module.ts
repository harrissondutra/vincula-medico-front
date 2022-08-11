import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EstabelecimentoComponent } from './views/estabelecimento/estabelecimento.component';
import { ProfissionalComponent } from './views/profissional/profissional.component';
import { VincularComponent } from './views/vincular/vincular.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profissional', component: ProfissionalComponent },
  { path: 'vincular', component: VincularComponent },
  { path: 'estabelecimento', component: EstabelecimentoComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
