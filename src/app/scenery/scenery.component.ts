import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureNature } from '../models/picture-nature';
import {ActivatedRoute} from "@angular/router";
import { PictureNaturesService } from '../services/picture-natures.service';
import { AsyncPipe, DatePipe, NgForOf, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-scenery',
  standalone: true,
  imports: [NgForOf, 
    AsyncPipe, 
    DatePipe,
    TitleCasePipe,],
  templateUrl: './scenery.component.html',
  styleUrl: './scenery.component.scss'
})
export class SceneryComponent implements OnInit{

  pictureNature$!:Observable<PictureNature[]>;

  constructor( private route:ActivatedRoute, private data:PictureNaturesService) {
  }


  ngOnInit(){
    this.pictureNature$ = this.data.getPictureNatureByTitle('scenery');
  }

  
}
