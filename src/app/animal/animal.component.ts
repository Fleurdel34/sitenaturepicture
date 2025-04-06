import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureNature } from '../models/picture-nature';
import {ActivatedRoute, Router} from "@angular/router";
import { PictureNaturesService } from '../services/picture-natures.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [DatePipe,],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss'
})
export class AnimalComponent implements OnInit{

  pictureNature$!:Observable<PictureNature[]>;

  constructor( private route:ActivatedRoute, private data:PictureNaturesService) {
  }


  ngOnInit(){
    let pictureNatureTitle = this.route.snapshot.params['animal'];
    this.pictureNature$ = this.data.getPictureNatureByTitle(pictureNatureTitle);
  }

  
}
