import { Component} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {AnimalComponent} from "./animal/animal.component";
import {FlowerComponent} from "./flower/flower.component";
import {HomeComponent} from "./home/home.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SceneryComponent} from "./scenery/scenery.component";
import {VegetalComponent} from "./vegetal/vegetal.component";
import {FormComponent} from "./form/form.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,
    RouterOutlet,
    FooterComponent,
    AnimalComponent,
    FlowerComponent,
    HomeComponent,
    LandingPageComponent,
    FormComponent,
    SceneryComponent,
    VegetalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{


}
