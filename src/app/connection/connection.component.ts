import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss'
})
export class ConnectionComponent  implements OnInit{

connectionForm!: FormGroup;

constructor(private formBuilder:FormBuilder, private router: Router, private authService: AuthService){}

/*créer la regex pour les emails+password*/

ngOnInit(): void {
  this.connectionForm=this.formBuilder.group({
    email:[null, [Validators.required]],
    password:[null,[Validators.required]]
  }, {updateOn:'blur'});
}

/*composant, route, service à créer*/
accountForm() {
  this.router.navigateByUrl('/accountForm');
}

/*A finir avec le service et mettre en place le back penser au token interceptors et guards*/                             
onLogin() {
  let formValue= this.connectionForm.value;
  this.authService.connectionAccount(formValue);
  /*mettre l'id?*/
  this.router.navigateByUrl('/form');
  this.connectionForm.reset();
}
}
