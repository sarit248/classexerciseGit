import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { UsersComponent } from '../components/users/users.component';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { Page404Component } from '../components/page404/page404.component';
import { HttpClientModule } from "@angular/common/http";
import { PhotoComponent } from '../components/photo/photo.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { McdonaldsComponent } from '../components/mcdonalds/mcdonalds.component';
import { HeadlineComponent } from '../components/headline/headline.component';
import { FormsModule } from "@angular/forms";
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule,MatInputModule, MatButtonModule,MatCheckboxModule} from "@angular/material";




@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        UsersComponent,
        MenuComponent,
        Page404Component,
        PhotoComponent,
        ThumbnailComponent,
        UserDetailsComponent,
        McdonaldsComponent,
        HeadlineComponent,
        ContactUsComponent,
    
    ],

    imports: [
        BrowserModule,
        RoutingModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule


    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
