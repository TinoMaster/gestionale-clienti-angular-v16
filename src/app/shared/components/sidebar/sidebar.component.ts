import { Component, OnInit } from '@angular/core';
import { authLinks, navLinks } from 'src/app/core/data/app.data';
import { NavLinks } from 'src/app/core/models/common/global.types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  navLinks!: NavLinks[];
  authLinks!: NavLinks[];

  ngOnInit(): void {
    this.navLinks = navLinks;
    this.authLinks = authLinks;
  }
}
