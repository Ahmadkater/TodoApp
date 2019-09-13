import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule , routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { NavigbarComponent } from './navigbar/navigbar.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    ModalComponent,
    NavigbarComponent,
    RegisterComponent,
    SigninComponent,
    CarouselComponent,
    CardComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
