import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from '../components/users/users.component';
import { HomeComponent } from '../components/home/home.component';
import { Page404Component } from '../components/page404/page404.component';
import { PhotoComponent } from '../components/photo/photo.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { McdonaldsComponent } from '../components/mcdonalds/mcdonalds.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';


const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "users", component: UsersComponent },
    { path: "user-details/:id", component: UserDetailsComponent },
    { path: "photo", component: PhotoComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "mcdonalds", component: McdonaldsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404Component }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
