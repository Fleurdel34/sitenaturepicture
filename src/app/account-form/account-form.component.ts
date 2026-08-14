import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { passwordMatchValidator } from '../validators/password-match.validator';

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.scss'
})
export class AccountFormComponent implements OnInit {

  accountForm!: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private router: Router, private authService: AuthService){}

  ngOnInit(): void {  
    this.accountForm=this.formBuilder.group({
      lastname:[null, [Validators.required]],
      firstname:[null, [Validators.required]],
      birthdate:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required, Validators.minLength(8)]],
      confirmPassword:[null, [Validators.required, Validators.minLength(8)]]
    }, {validators: [passwordMatchValidator], updateOn:'blur'});
  }


  /*verifier que l'utilisateur est âgé de 18 ans*/

  /*calculAgeUser(birthdate: Date | null): boolean {
    const today = Date.now();
    const age = Math.floor((today - birthdate!.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    console.log('Age de l\'utilisateur :', age);
    return age >= 18;
  }*/

  onCreateAccount() {
    let formValue= this.accountForm.value;
    this.authService.createAccount(formValue);
    this.router.navigateByUrl('/connection');
    this.accountForm.reset();
  }

}
