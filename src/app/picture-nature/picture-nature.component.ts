import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-nature',
  standalone: true,
  imports: [],
  templateUrl: './picture-nature.component.html',
  styleUrl: './picture-nature.component.scss'
})
export class PictureNatureComponent implements OnInit{
    title!: string;
    description!: string;
    createdAt!: Date;
    likes!: number;

    ngOnInit(): void {
      this.title = 'Fleurs';
      this.description = "Une rose";
      this.createdAt = new Date();
      this.likes = 0;
    }


}
