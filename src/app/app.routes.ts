import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {HomeComponent} from "./home/home.component";
import {AnimalComponent} from "./animal/animal.component";
import {VegetalComponent} from "./vegetal/vegetal.component";
import {FlowerComponent} from "./flower/flower.component";
import {SceneryComponent} from "./scenery/scenery.component";
import {NewNaturePictureComponent} from "./newNaturePicture/newNaturePicture.component";


export const routes: Routes = [
    {path: 'animal', component: AnimalComponent},
    {path: 'vegetal', component: VegetalComponent},
    {path: 'flower', component: FlowerComponent},
    {path: 'scenery', component: SceneryComponent},
    {path: 'home', component: HomeComponent},
    {path: 'newNaturePicture', component: NewNaturePictureComponent},
    {path: '', component: LandingPageComponent}

];
