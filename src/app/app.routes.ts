import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { CatalogComponent } from '../components/catalog/catalog.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { HomeComponent } from '../components/home/home.component';
import { ChisiamoComponent } from '../chisiamo/chisiamo.component';
import { CartComponent } from '../components/cart/cart.component';
export const routes: Routes = [
    {
        path : "login",
        component: LoginComponent
    },
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "contatti",
        component: ContactsComponent
    },
    {
        path: "catalogo",
        component: CatalogComponent
    }, {
        path: "chisiamo",
        component: ChisiamoComponent
    }, 
    {
        path: "cart",
        component: CartComponent
    }
];
