import { Injectable } from "@angular/core";
import { PictureNature } from "../models/picture-nature";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, take} from "rxjs";
import {FormGroup} from "@angular/forms";


@Injectable({
    providedIn:'root'
})
export class PictureNaturesService{

  constructor(private http : HttpClient){}

  addNaturePicture(formValue: FormGroup){
    this.http.post('https://localhost:8080/api/form', formValue)
      .pipe(take(1), catchError(err=>{
        throw 'error in source. Details:' + err;
      }))
      .subscribe();
  }

    getPictureNature(): Observable<PictureNature[]>{
        return this.http.get<PictureNature[]>('https://localhost:8080/api/form');
    }

    getPictureNatureById(pictureNatureId:number): Observable<PictureNature>{
      return this.http.get<PictureNature>(`https://localhost:8080/api/form/${pictureNatureId}`);
    }


}
