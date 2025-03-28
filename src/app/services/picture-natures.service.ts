import { Injectable } from "@angular/core";
import { PictureNature } from "../models/picture-nature";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";


@Injectable({
    providedIn:'root'
})
export class PictureNaturesService{

  constructor(private http : HttpClient){}

  addNaturePicture(formValue: FormGroup){
    this.http.post('http://localhost:8080/api/form', formValue)
      .subscribe();
  }

  getPictureNatureByTitle(pictureNatureTitle:string): Observable<PictureNature>{
    return this.http.get<PictureNature>(`https://localhost:8080/api/form/${pictureNatureTitle}`);
  }
}
