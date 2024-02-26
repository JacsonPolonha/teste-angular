import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public formLogin:FormGroup;

  constructor(private fb:FormBuilder, private loginService:loginService){
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void{

  }

  public criarFormLogin():FormGroup{
    return this.fb.group({
      username:['', Validators.required, Validators.minLength(5)],
      password:['', Validators.required, Validators.minLength(4)]
    })
  }

  public isFormControlInvalid(controlName:string):boolean {
    return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }

  public submitForm(){
    const {username, password} = this.formLogin.value;

    this.loginService.login(username, password).subscribe(
      res => {
        
      },
      err => {

      }
    );
  }

}
