import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import {SiteNavbarComponent} from '../components/site-navbar/site-navbar.component';
@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, LoginComponent, SiteNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PesciIncredibili';
}
