import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { TechnologyComponent } from './technology/technology.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CareersComponent,
    TechnologyComponent,
    RegisteredUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
