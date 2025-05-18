import {Component, OnInit, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { Observable} from "rxjs";
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
  imageBase64: string = '';

  constructor(private formBuilder:FormBuilder, private router:Router, private pictureNaturesService: PictureNaturesService){

  }

  //mettre en place la regex pour les extensions
  //voir le projet sur le live la sécurité du code avec purify

  ngOnInit(): void {
    this.natureForm=this.formBuilder.group({
      title:[null, Validators.required, Validators.pattern(/[a-z]/), Validators.max(7)],
      description:[null, Validators.required],
      imageUrl:[null, [Validators.required, Validators.pattern(this.urlRegex)]],
      date: new Date()
    }, {
      updateOn: 'blur'
    })
  }

  convertFileToBase64(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      this.natureForm.patchValue({ imageUrl: reader.result as string }); // Mettre à jour le champ
    };
  }
}

  onSubmit(){
    let formValue=this.natureForm.value;
    this.pictureNaturesService.addNaturePicture(formValue);
    this.router.navigateByUrl('/home');
  }

}
