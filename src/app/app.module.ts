import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { HttpClientModule } from '@angular/common/http';
// import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
// import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    // HomeComponent,
    UpdateComponent,
    AddComponent,
    ListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
