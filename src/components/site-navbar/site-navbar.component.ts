import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-site-navbar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: './site-navbar.component.html',
  styleUrl: './site-navbar.component.css'
})

export class SiteNavbarComponent {

}
