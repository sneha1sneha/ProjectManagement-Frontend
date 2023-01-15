import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public id:string=""
  public result:any=""
   public data:any=""
  public tokenn:any=""
   public currentUser:string=""
   public local:any;
  constructor(private http:HttpClient,private router: Router) { }
  ngOnInit(): void {
    this.list()
  }
  list(){
    console.log("hjkhjkh")
       const local=localStorage.getItem('token')
    
      const  locall=JSON.parse(local||"");
      console.log("sdewqe",JSON.parse(local||""))

     // console.log("yjyuj",locall)
        // const headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImRpc3BsYXluYW1lIjoiZSIsImlhdCI6MTY3MzcwMjk4NywiZXhwIjoxNjczNzI5OTg3fQ.0mwjsplVyqaCVwb6BGKyX6Co6tt8U13_sXwmfQhk6VE"}
          const headers={Authorization:"Bearer"+" " + locall.token}
      this.http.get("http://localhost:8080/getproject1",{headers}).subscribe(result=>{
           console.log(result)
              this.data=result;
            console.log(this.data)
   } )
    }
    delete(id:any){
      const local=localStorage.getItem('token')
    
      const  locall=JSON.parse(local||"");
      const headers={Authorization:"Bearer"+" " + locall.token}
      alert(`Are you sure you want to delete projectid ${id}`)
      
      this.http.delete(`http://localhost:8080/delete/${id}`,{headers}).subscribe(result=>{
      console.log(result)
      this.data=result;
      console.log(this.data)
    if(this.data){

      this.router.navigate(['/list'])
      }
         
         

          
         
} )


    }
   
  }
  
