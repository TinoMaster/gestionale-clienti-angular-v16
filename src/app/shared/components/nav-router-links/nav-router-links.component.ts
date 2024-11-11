import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-router-links',
  templateUrl: './nav-router-links.component.html',
  styleUrls: ['./nav-router-links.component.css'],
})
export class NavRouterLinksComponent implements OnInit, OnDestroy {
  segments: { name: string; url: string }[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb();
      });

    // Llama a la función al inicio para que cargue el breadcrumb inicial.
    this.updateBreadcrumb();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateBreadcrumb(): void {
    this.segments = [];
    let route = this.activatedRoute.root;
    let url = '';

    // Recorre cada nivel de la ruta y agrega cada segmento individualmente
    while (route.firstChild) {
      route = route.firstChild;
      route.snapshot.url.forEach((segment) => {
        url += `/${segment.path}`;
        this.segments.push({ name: segment.path, url });
      });
    }
  }
}
