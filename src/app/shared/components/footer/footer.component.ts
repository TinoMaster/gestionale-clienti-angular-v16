import { Component, OnInit } from '@angular/core';
import {
  footerDescription,
  navLinks,
  socialContacts,
} from 'src/app/core/data/app.data';
import {
  NavLinks,
  SocialMediaLinks,
} from 'src/app/core/models/common/global.types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  pageLinks!: NavLinks[];
  description!: string;
  socialMediaLinks!: SocialMediaLinks[];
  email!: string;
  phone!: string;

  ngOnInit(): void {
    this.pageLinks = navLinks;
    this.description = footerDescription;
    this.socialMediaLinks = socialContacts;
    this.email = '4qLpO@example.com';
    this.phone = '333 333 333';
  }
}
