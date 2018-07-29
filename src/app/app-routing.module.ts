import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent }      from './aboutus/aboutus.component';
import { CareersComponent }      from './careers/careers.component';
import { RegisteredUsersComponent}      from './registered-users/registered-users.component';
import {  TechnologyComponent}      from './technology/technology.component';


const routes: Routes = [
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'registeredusers', component: RegisteredUsersComponent },
  { path: 'technology', component: TechnologyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}