import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent {
  result:any=[];
  name:any="";
  constructor(private postServices:PostServiceService,private snakebar:MatSnackBar){

  }

  searchByname(){
    this.postServices.searchByName(this.name).subscribe(res=>{
      this.result=res;
      console.log(res);

    },error=>{
      this.snakebar.open("something went woring","ok");

    })
  }

}
