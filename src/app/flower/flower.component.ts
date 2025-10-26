import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureNature } from '../models/picture-nature';
import {ActivatedRoute, Router} from "@angular/router";
import { PictureNaturesService } from '../services/picture-natures.service';
import { AsyncPipe, DatePipe, NgForOf, TitleCasePipe } from '@angular/common';



@Component({
  selector: 'app-flower',
  standalone: true,
  imports: [NgForOf, 
    AsyncPipe, 
    DatePipe,
    TitleCasePipe,],
  templateUrl: './flower.component.html',
  styleUrl: './flower.component.scss'
})
export class FlowerComponent implements OnInit{

  pictureNature$!:Observable<PictureNature[]>;

  constructor( private route:ActivatedRoute, private data:PictureNaturesService, private router:Router) {
  }


  ngOnInit(){
    this.pictureNature$ = this.data.getPictureNatureByTitle('flower');
  }

  viewPicture(id:number) {
    this.router.navigateByUrl(`card/${id}`);
  }
}
