import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
  allPost:any;
  constructor(private postServices:PostServiceService,private snakebat:MatSnackBar){}

  ngOnInit(){
    this.getAllPost();
  }
  getAllPost(){
    this.postServices.getAllPost().subscribe(res=>{
      console.log(res);
      this.allPost=res

    },error=>{
      this.snakebat.open("something went wrong","ok");

    })

  }

}
