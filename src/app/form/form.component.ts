import {Component, OnInit, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {PictureNature} from "../models/picture-nature";
import {Router} from "@angular/router";
import {PictureNaturesService} from "../services/picture-natures.service";

@Component({
  selector: 'app-form',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

  natureForm!: FormGroup;
  naturePicturePreview$!: Observable<PictureNature>;
  urlRegex!:RegExp;


  constructor(private formBuilder:FormBuilder, private router:Router, private pictureNaturesService: PictureNaturesService){

  }

  //mettre en place une regex pour l'input sur le fichier pour limiter les extensions
  //voir le projet sur le live la sécurité du code avec purify

  ngOnInit(): void {
    this.natureForm=this.formBuilder.group({
      title:[null, Validators.required],
      description:[null, Validators.required],
      image:[null, [Validators.required, Validators.pattern(this.urlRegex)]]
    }, {
      updateOn: 'blur'
    })

    this.naturePicturePreview$ = this.natureForm.valueChanges.pipe(map(formValue =>({
      ...formValue,
        createdAt: new Date(),
        id:0
      }))
    );
  }

  onSubmit(){
    let formValue=this.natureForm.value;
    console.log(formValue);
    this.pictureNaturesService.addNaturePicture(formValue);
    this.router.navigateByUrl('/home');
  }

}
