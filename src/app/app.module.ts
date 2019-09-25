import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {AppRoutingModule , routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {UserService} from'./services/user.service';
import { AuthGardGuard } from "../app/guards/auth-gard.guard";
import { TaskService } from "../app/services/task.service";
import { AdminService } from './services/admin.service';

import { ModalComponent } from './modal/modal.component';
import { NavigbarComponent } from './navigbar/navigbar.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AdminComponent } from './admin/admin.component';


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
    MainComponent,
    AddTaskComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    NgbModule,
    AppRoutingModule,
  ],
  providers: [UserService , AuthGardGuard , TaskService , AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
