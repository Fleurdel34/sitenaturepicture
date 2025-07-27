import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PictureNaturesService} from "../services/picture-natures.service";

@Component({
  selector: 'app-form',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

  natureForm!: FormGroup;
  urlRegex!:RegExp;
  imageBase64: string = '';
  messageFile : string ="";

  constructor(private formBuilder:FormBuilder, private router:Router, private pictureNaturesService: PictureNaturesService){

  }

  ngOnInit(): void {
    this.urlRegex=/^[\w,\s-]+\.(pdf|jpg|jpeg|svg|png)$/i;
    this.natureForm=this.formBuilder.group({
      title:[null, [Validators.required, Validators.pattern(/[a-z]/), Validators.max(7)]],
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
      const size = file.size;
      const maxSize = 5*1024*1024; //5MB
      if(size <maxSize){
        this.messageFile= 'Fichier accepté';
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        this.natureForm.patchValue({ imageUrl: reader.result as string })}; // Mettre à jour le champ*/
        }else{
        this.messageFile= 'Fichier trop volumineux';
      };
    }
  }

  onSubmit(){
    let formValue=this.natureForm.value;
    this.pictureNaturesService.addNaturePicture(formValue);
    this.router.navigateByUrl('/home');
  }

}
