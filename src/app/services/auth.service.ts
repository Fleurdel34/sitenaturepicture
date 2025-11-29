import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient){}

  /*a finir*/
  connectionAccount(formValue: FormGroup) {
    this.http.post('http://localhost:8080/api/auth', formValue)
      .subscribe()
  }

}
