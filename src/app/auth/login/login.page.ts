import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private readonly authServ:AuthService, private readonly router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.authServ.logIn({email:form.value.email,password:form.value.password})
      .then(()=> {
        this.router.navigate(['/home'])
      })
      .catch((err)=>{
        console.log(err.message)
      })
  }
}
