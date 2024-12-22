import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {HomeComponent} from "./home/home.component";
import {AnimalComponent} from "./animal/animal.component";
import {VegetalComponent} from "./vegetal/vegetal.component";
import {FlowerComponent} from "./flower/flower.component";
import {SceneryComponent} from "./scenery/scenery.component";
import {FormComponent} from "./form/form.component";


export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'home', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'animal', component: AnimalComponent},
    {path: 'vegetal', component: VegetalComponent},
    {path: 'flower', component: FlowerComponent},
    {path: 'scenery', component: SceneryComponent}

];
