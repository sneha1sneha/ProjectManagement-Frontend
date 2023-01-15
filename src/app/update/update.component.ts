import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public projectname: any = "";
  public data: any;
  public datat: any;
  public id: string = "";
  
  public t: any = "";
  public manager: any = "";
  public description: any = "";
  public teammember1: any = "";
  public teammember2: any = "";
  public teammember3: any = "";
  public teammember4: any = "";
  public local:any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    // console.log(this.router.url);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getproject(this.id)
  }

  getproject(id: any) {
    // console.log(this.projectname)
    this.http.get(`http://localhost:8080/getproject1/${id}`,).subscribe(result => {
      this.data = result;
      
      this.projectname = this.data[0].projectname ;
      this.manager = this.data[0].manager;
      this.description = this.data[0].description;
     this.teammember1=this.data[0].teammember1;
     this.teammember2=this.data[0].teammember2;
     this.teammember3=this.data[0].teammember3;
     this.teammember4=this.data[0].teammember4;
    })
    
  }

  
  updateproject(id:any){
    const local=localStorage.getItem('token')
    const  locall=JSON.parse(local||"");
    const headers={Authorization:"Bearer"+" " + locall.token}
    const body = {projectname :this.projectname ,description:this.description,manager:this.manager,teammember1:this.teammember1,teammember2:this.teammember2,teammember3:this.teammember3,teammember4:this.teammember4};
    // console.log(this.projectname)
    
      this.http.put(`http://localhost:8080/updateproject1/${id}`,body,{headers}).subscribe(result=> {
      //  console.log(result)
    
      this.datat=result
      
      console.log(this.datat)
      if(this.data){
        alert(`THE PROJECT ID ${id} IS UPDATED`)
        this.router.navigate(['/list'])
        
            }
     
    
     })
    
}

}

