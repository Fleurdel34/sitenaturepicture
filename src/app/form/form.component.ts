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
  imageBase64: string = '';
  messageFile : string ="";
  fileSizeMax = false;
  

  constructor(private formBuilder:FormBuilder, private router:Router, 
    private pictureNaturesService: PictureNaturesService){

  }

  ngOnInit(): void {
    window.addEventListener('dragover', e => e.preventDefault());
    window.addEventListener('drop', e => e.preventDefault());
    this.natureForm=this.formBuilder.group({
      title:[null, [Validators.required, Validators.pattern(/[a-z]+/), Validators.maxLength(7)]],
      description:[null, Validators.required],
      imageUrl:[null, Validators.required],
      date: new Date()
    }, {
      updateOn: 'blur'
    })
  }

convertFileToBase64(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    
    if (file) {
      const size = file.size;
      const maxSize = 2*1024*1024; //2MO

      if(size > maxSize){
        alert('Fichier trop volumineux!');
        this.fileSizeMax = true;
      }

      if(this.fileSizeMax === false){
        const reader = new FileReader();
        reader.onload = () => {
        this.natureForm.patchValue({ imageUrl: reader.result as string })
        }
        reader.readAsDataURL(file);
        }      
    }
    return this.fileSizeMax;
  }

  onSubmit(){
    if(this.fileSizeMax === false){
      let formValue=this.natureForm.value;
      this.pictureNaturesService.addNaturePicture(formValue);
      this.router.navigateByUrl('/home');
    }
  }
}
