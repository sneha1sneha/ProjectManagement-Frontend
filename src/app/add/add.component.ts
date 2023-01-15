import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
public projectname:string=""
public description:any=""
public manager:any=""
public teammember1:any=""
public teammember2:any=""
public teammember3:any=""
public teammember4:any=""
public data:any=""
public local:any;
validationErr: boolean = false;
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  addproject(){
    this.validationErr = false;
    console.log(this.projectname)
    const local=localStorage.getItem('token')
    const  locall=JSON.parse(local||"");
    const headers={Authorization:"Bearer"+" " + locall.token}
    const body = { projectname:this.projectname ,description:this.description,manager:this.manager,teammember1:this.teammember1,teammember2:this.teammember2,teammember3:this.teammember3,teammember4:this.teammember4};
    if (this.projectname && this.description) {
    this.http.post("http://localhost:8080/addproject",body,{headers}).subscribe((result)=>{
      // console.log(result)
    this.data=result
    console.log(this.data)
   if(this.data){
     
    this.router.navigate(['/list'])
   }
  })
} else {
  this.validationErr = true;
}
// token(){
//   localStorage.removeItem('token')
//   this.router.navigate(['/registeration'])
// }
}
}
