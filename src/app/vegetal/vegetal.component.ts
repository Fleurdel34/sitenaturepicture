import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureNature } from '../models/picture-nature';
import {ActivatedRoute, Router} from "@angular/router";
import { PictureNaturesService } from '../services/picture-natures.service';
import { AsyncPipe, DatePipe, NgForOf, TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-vegetal',
  standalone: true,
  imports: [NgForOf, 
    AsyncPipe, 
    DatePipe,
    TitleCasePipe,],
  templateUrl: './vegetal.component.html',
  styleUrl: './vegetal.component.scss'
})
export class VegetalComponent implements OnInit{

  pictureNature$!:Observable<PictureNature[]>;

  constructor( private route:ActivatedRoute, private data:PictureNaturesService, private router:Router) {
  }


  ngOnInit(){
    this.pictureNature$ = this.data.getPictureNatureByTitle('vegetal');
  }

  viewPicture(id:number) {
    this.router.navigateByUrl(`card/${id}`);
  }
}