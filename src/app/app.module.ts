import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { AboutComponent } from './components/about/about.component';
import {DataService} from './services/data.service';

const appRoutes:Routes=[
  {path:'',component:UserComponent},
  {path:'abouts',component:AboutComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
