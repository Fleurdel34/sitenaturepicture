import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureNature } from '../models/picture-nature';
import {ActivatedRoute} from "@angular/router";
import { PictureNaturesService } from '../services/picture-natures.service';
import { AsyncPipe, DatePipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [
    NgForOf, 
    AsyncPipe, 
    DatePipe
  ],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss'
})
export class AnimalComponent implements OnInit{

  pictureNature$!:Observable<PictureNature[]>;

  constructor( private route:ActivatedRoute, private data:PictureNaturesService) {
  }


  ngOnInit(){
    this.pictureNature$ = this.data.getPictureNatureByTitle('animal');
  }

  
}
