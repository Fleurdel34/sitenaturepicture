import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { filter, interval, map, Observable, tap,take, mergeMap, delay, of, concatMap, exhaustMap, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, AsyncPipe, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {

  }

}
