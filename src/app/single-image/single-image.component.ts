import { AsyncPipe, DatePipe, NgForOf, TitleCasePipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureNature } from '../models/picture-nature';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureNaturesService } from '../services/picture-natures.service';

@Component({
  selector: 'app-single-image',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    TitleCasePipe,
    NgIf
],
  templateUrl: './single-image.component.html',
  styleUrl: './single-image.component.scss'
})
export class SingleImageComponent implements OnInit{

  pictureNature$!:Observable<PictureNature>;


  constructor(private route:ActivatedRoute, private data:PictureNaturesService , private router:Router){}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.pictureNature$ = this.data.getPictureNatureById(id);
  }

  onHome(title:string){
    this.router.navigateByUrl(`${title}`);
  }

}
