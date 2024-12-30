import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { signal } from '@angular/core';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-site-navbar',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './site-navbar.component.html',
  styleUrl: './site-navbar.component.css',
})
export class SiteNavbarComponent {
  constructor(private router: Router) {}
  sessione = inject(ServiziService);
  mostraLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.sessione.isLogged.set(false);
  }
}
