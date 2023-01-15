import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public account: string = '';
  public username: string = '';
  public password: string = '';
  public confirmpassword: string = '';
  public result: any = '';
  public response: any = '';
  validationErr: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log("ywerh")
    // this.r()
    console.log("werter")
  }
  r() {

    const body = {name:this.name ,email: this.email,account: this.account,username: this.username, password: this.password };
    console.log(this.username)
    this.validationErr = false;
    if (this.name && this.email && this.account && this.username && this.password && this.confirmpassword ) {
      this.http.post("http://localhost:8080/register", body).subscribe(result => {
        console.log(result)
        this.response = result
        if (this.response) {
          this.router.navigate(['/login'])
        }
        //  this.router.navigate(['/login'])

        //  this.response=result
        //  console.log( this.response)

      })
    } else {
      this.validationErr = true;
    }




    //  console.log(this.result)
  }


}
