import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    private readonly authServ:AuthService,
    private readonly router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form)
    this.authServ.registerNewUser({email:form.value.email,password:form.value.password})
    .then(()=>{
      this.router.navigate(['/home']);
    })
    .catch((err)=> {
      console.log(err.message);
    })
  };

}
