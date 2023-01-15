import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public result:string="";
  public data:any="";
  public in:string="";
  validationErr: boolean = false;
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    //  this.loginn()
  }
  // login() {
  //   alert("login clicked")
  //   console.log('First Name: ',this.username);
  //   console.log('Password: ',this.password);
  // }
  loginn(){
    // this.in="fgdfg"
    this.validationErr = false;
    const body = { username:this.username ,password:this.password};
    if (this.username && this.password) {
    this.http.post("http://localhost:8080/loginn",body).subscribe((result)=>{
      // console.log(result)
    
      this.data=result
    console.log(this.data.token)
    if(this.data.token){
      localStorage.setItem('token',JSON.stringify(this.data));
       alert(" u r logged in ")
     
       this.router.navigate(['/list'])
    }

    
    
    
      
      
        //  window.location.href="home"
       
      
    })
     
  
      
    
   }
   else {
    this.validationErr = true;
  }
}}
