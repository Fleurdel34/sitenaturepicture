import { Component } from '@angular/core';
import {PictureNatureComponent} from './picture-nature/picture-nature.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PictureNatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
