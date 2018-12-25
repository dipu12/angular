import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ { path: '', component: AppComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },

// otherwise redirect to home
{ path: '**', redirectTo: '' }];

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);