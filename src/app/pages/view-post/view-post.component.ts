import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {
   postId = this.activatedRoute.snapshot.paramMap.get('id');
   
  postData:any;
  commentform!:FormGroup;
  comments:any;
  
  constructor(private postServices:PostServiceService,private activatedRoute:ActivatedRoute,
    private matSnakeBar:MatSnackBar,private fb:FormBuilder,private commentServices:CommentService){}
ngOnInit(){

  this.postId = String(this.postId); 
  
  console.log('postId:', this.postId); 
  console.log(this.postId);
  this.getPostById();
  this.commentform=this.fb.group({
    postedBy:[null,Validators.required],
    contant:[null,Validators.required]
  })
}
publishComment(){
  const postedBy=this.commentform.get('postedBy')?.value;
  const contant=this.commentform.get('contant')?.value;
  this.commentServices.createComment(this.postId,postedBy,contant).subscribe(res=>{
    this.matSnakeBar.open("Comment Published successfully","ok");
    this.getCommentsByPost();

  },error=>{
    this.matSnakeBar.open("something went wrong!!!","ok")

  })
}

getCommentsByPost(){
  this.commentServices.getAllcommentsByPosts(this.postId).subscribe(res=>{
    this.comments=res;

  },error=>{
    this.matSnakeBar.open("something went wrong","ok");

  })
}
getPostById(){
  this.postServices.getPostById(this.postId).subscribe(res=>{
    this.postData=res;
    console.log(res);
    this.getCommentsByPost();
    this.matSnakeBar.open("successfully ","ok");

  },error=>{
    this.matSnakeBar.open("something went woring","ok");
  })
}

likePost(){
  this.postServices.likePost(this.postId).subscribe((res)=>{
    this.matSnakeBar.open("post like successfully","ok")
    this.getPostById();

  },(error)=>{
    this.matSnakeBar.open("something went wrong","ok");

  })

}
}
