import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { MatListModule } from '@angular/material/list';
import { VincularComponent } from './views/vincular/vincular.component';
import { EstabelecimentoComponent } from './views/estabelecimento/estabelecimento.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { ProfissionalCreateComponent } from './views/profissional/profissional-create/profissional-create.component';
import { EstabelecimentoCreateComponent } from './views/estabelecimento/estabelecimento-create/estabelecimento-create.component';
import { EstabelecimentoReadComponent } from './views/estabelecimento/estabelecimento-read/estabelecimento-read.component';
import { ProfissionalReadComponent } from './views/profissional/profissional-read/profissional-read.component';








@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    VincularComponent,
    EstabelecimentoComponent,
    ProfissionalCreateComponent,
    ProfissionalReadComponent,
    EstabelecimentoCreateComponent,
    EstabelecimentoReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
