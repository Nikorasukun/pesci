import { routes } from './../../app/app.routes';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import { Signal } from '@angular/core';
import { ServiziService } from '../../services/servizi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){}
  sessione = inject(ServiziService)

  logAccount(){
    this.sessione.isLogged.set(true)
    this.router.navigate(['/catalogo'])
  }
}
