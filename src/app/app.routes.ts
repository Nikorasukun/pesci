import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { WhoisComponent } from '../components/whois/whois.component';
import { CatalogComponent } from '../components/catalog/catalog.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { HomeComponent } from '../components/home/home.component';

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
        component: WhoisComponent
    }
];
