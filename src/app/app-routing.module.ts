import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';

const routes: Routes = [
  { path: '**', pathMatch: 'full', component: AuthentificationComponent},
  { path: 'connexion', component: AuthentificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
