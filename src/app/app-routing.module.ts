import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'home', component: CarouselComponent},
    {path: 'aboutus', component: CardComponent},

];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponents = [RegisterComponent ,SigninComponent , CarouselComponent , CardComponent]
