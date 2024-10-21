import { Injectable } from "@angular/core";
import { PictureNature } from "../models/picture-nature";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
    providedIn:'root'
})
export class PictureNaturesService{

  constructor(private http : HttpClient){}

    getPictureNature(): Observable<PictureNature[]>{
        return this.http.get<PictureNature[]>('http://localhost:3000/pictureNatures');
    }

    getPictureNatureById(pictureNatureId:number): Observable<PictureNature>{
      return this.http.get<PictureNature>(`http://localhost:3000/pictureNatures/${pictureNatureId}`);
    }
}
