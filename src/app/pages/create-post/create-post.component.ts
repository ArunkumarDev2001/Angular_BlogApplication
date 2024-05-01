import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postForm!:FormGroup;
  tags:string[]=[];
  constructor(private fb:FormBuilder,private router:Router,private snakebar:MatSnackBar,private postServices:PostServiceService){

  }
ngOnInit(){
  this.postForm=this.fb.group({
    name:[null,Validators.required],
    contant:[null,[Validators.required,Validators.maxLength(5000)]],
    image:[null,Validators.required],
    postedBy:[null,Validators.required]
  })
}
add(event:any){
  const value=(event.value||'').trim();
  if(value){
    this.tags.push(value);

  }
  event.chipInput!.clear();
}

remove(tag:any){
  const index=this.tags.indexOf(tag);
  if(index>0){
    this.tags.splice(index,1);
  }
}
createPost(){
  const data=this.postForm.value;
  data.tags=this.tags;
  this.postServices.createNewPost(data).subscribe(res=>{
    this.snakebar.open("post creared successfully !!!!","ok");
    this.router.navigateByUrl("/")

  },error=>{
    this.snakebar.open("something went wrong","ok")


  })
}

}
