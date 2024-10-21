import { Component } from '@angular/core';
import {AsyncPipe, DatePipe, NgIf, UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    NgIf,
    RouterLink,
    UpperCasePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
