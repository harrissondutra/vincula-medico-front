import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Profissional } from '../profissional.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})


export class ProfissionalComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'nome', 'endereco', 'celular', 'telefone', 'funcao'];
  dataSource: MatTableDataSource<Profissional>;

  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // @ViewChild(MatSort) sort: MatSort | undefined;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): Profissional {


  return {
    id: id,
    nome: 'Profissional ' + id,
    endereco: 'Endereco ' + id,
    celular: 'Celular ' + id,
    telefone: 'Telefone ' + id,
    funcao: 'Funcao ' + id,

  };
}
