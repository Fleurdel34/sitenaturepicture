import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {map, Observable} from "rxjs";
import {PictureNature} from "../models/picture-nature";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-nature-picture',
  standalone: true,
  imports: [
    ReactiveFormsModule],
  templateUrl: './newNaturePicture.component.html',
  styleUrl: './newNaturePicture.component.scss'
})
export class NewNaturePictureComponent implements OnInit{

  natureForm!: FormGroup;
  naturePicturePreview$!: Observable<PictureNature>;
  urlRegex!:RegExp;

  constructor(private formBuilder:FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.natureForm=this.formBuilder.group({
      title:[null, Validators.required],
      description:[null, Validators.required],
      image:[null, [Validators.required, Validators.pattern(this.urlRegex)]]
    }, {
    updateOn: 'blur'
    });

    this.naturePicturePreview$ = this.natureForm.valueChanges.pipe(map(formValue =>({
      ...formValue,
      createdAt: new Date(),
      id:0
    }))
    );
  }

  onSubmitForm():void{
    let formValue=this.natureForm.value;
    //this.pictureNatureService.addNaturePicture(formValue);
    this.router.navigateByUrl('');
  }

}
