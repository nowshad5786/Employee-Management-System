import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) { }



  ngOnInit(): void {

  }

  username:string="";

  password:string="";

 

  onSubmit(formValue:NgForm){

    console.log(formValue);

    if(this.username==="Nowshad Sk" && this.password==="5786"){

      // alertify.success("Login successful")

      this.router.navigate(['/dashboard'])

    }

    else if(this.username==="" && this.password===""){

     

      alertify.alert('Oops!!', 'Enter Username and Password');

     

    }

    else {

     

      alertify.alert('Oops!!!', 'Incorrect Username/Password');

     

    }}

   

  }

  
