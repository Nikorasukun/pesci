import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-site-navbar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './site-navbar.component.html',
  styleUrl: './site-navbar.component.css'
})

export class SiteNavbarComponent {

}
