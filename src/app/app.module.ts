import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from'@angular/forms'
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { from } from 'rxjs';
import { RegisterComponent } from './components/authentification/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
