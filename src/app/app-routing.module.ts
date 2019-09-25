import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { AuthGardGuard } from "../app/guards/auth-gard.guard";

import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'home', component: CarouselComponent},
    {path: 'aboutus', component: CardComponent},
    {path: 'main', component: MainComponent , canActivate: [AuthGardGuard]},
    {path: 'addtask', component: AddTaskComponent , canActivate: [AuthGardGuard]},
    {path: 'admin', component: AdminComponent},

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponents = [RegisterComponent ,SigninComponent , CarouselComponent , CardComponent ,  MainComponent , AddTaskComponent , AdminComponent]
