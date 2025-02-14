import { Injectable } from "@angular/core";
import { PictureNature } from "../models/picture-nature";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, take} from "rxjs";
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

    getPictureNature(): Observable<PictureNature[]>{
        return this.http.get<PictureNature[]>('https://localhost:8080/api/form');
    }

    getPictureNatureById(pictureNatureId:number): Observable<PictureNature>{
      return this.http.get<PictureNature>(`https://localhost:8080/api/form/${pictureNatureId}`);
    }


}
