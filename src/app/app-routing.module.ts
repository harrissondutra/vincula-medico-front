import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfissionalReadComponent } from './views/profissional/profissional-read/profissional-read.component';
import { VincularComponent } from './views/vincular/vincular.component';
import { ProfissionalCreateComponent } from './views/profissional/profissional-create/profissional-create.component';
import { EstabelecimentoReadComponent } from './views/estabelecimento/estabelecimento-read/estabelecimento-read.component';
import { EstabelecimentoCreateComponent } from './views/estabelecimento/estabelecimento-create/estabelecimento-create.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profissional', component: ProfissionalReadComponent },
  { path: 'vincular', component: VincularComponent },
  { path: 'estabelecimento', component: EstabelecimentoReadComponent },
  { path: 'estabelecimento-create', component: EstabelecimentoCreateComponent },
  // { path: '**', redirectTo: 'home' },
  { path: 'profissional-cadastro', component: ProfissionalCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
