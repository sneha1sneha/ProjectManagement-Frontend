import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
// import { AuthGuard } from './auth.guard';
// import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AuthGuard } from './shared/auth.guard';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  // { path: '', redirectTo: '/registeration', pathMatch: 'full' },
  //  {path:'home', component :HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   {path:'addproject', component :AddComponent,canActivate:[AuthGuard],},
  {path:'login',component :LoginComponent},
  {path:'registeration', component :RegisterationComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'update',component :UpdateComponent,canActivate:[AuthGuard]},
  {path:'update/:id',component :UpdateComponent,canActivate:[AuthGuard],},
  // {path:'list', component :ListComponent},
  {path:'list', component :ListComponent ,canActivate:[AuthGuard]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
