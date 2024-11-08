import { Component, OnInit } from '@angular/core';
import { authLinks, navLinks } from 'src/app/core/data/app.data';
import { NavLinks } from 'src/app/core/models/common/global.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Gestionale Clienti';
  navLinks!: NavLinks[];
  authLinks!: NavLinks[];

  ngOnInit(): void {
    this.navLinks = navLinks;
    this.authLinks = authLinks;
  }
}
