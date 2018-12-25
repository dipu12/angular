import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

;import { routing }        from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AlertComponent} from './_directives/alert.component';
import { from } from 'rxjs';
import { ReactiveFormsModule }    from '@angular/forms';
import {FakeBackendInterceptor } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,  
 

  ],
  imports: [
    BrowserModule,
    routing,ReactiveFormsModule,  HttpClientModule,
  ],
  providers: [ 
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    FakeBackendInterceptor ],


  bootstrap: [AppComponent]
})
export class AppModule { }
