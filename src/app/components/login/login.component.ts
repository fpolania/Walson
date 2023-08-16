import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submit: boolean;

  constructor(private formBuilder: FormBuilder){
    this.submit = false; 
  }

  ngOnInit(): void {
    this.starForm();

  }
  starForm(){
    this.loginForm = this.formBuilder.group({ 
      usuario: ["",[Validators.required]],
      contrasenia: ["",[Validators.required]]

    }) 
  }
  get controlsLogin(): any {
    return this.loginForm.controls;
  } 
  inicarSesion(){
    this.submit = true;
  } 

}
