import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  showFiller = false;

  menuLateral: string[] = ['Profissional', 'Estabelecimento', 'Víncular'];

  constructor() { }

  ngOnInit(): void {
  }

}
