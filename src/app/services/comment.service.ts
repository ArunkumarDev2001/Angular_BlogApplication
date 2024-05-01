import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const Basic_url='https://springbootblog.onrender.com/'

// const Basic_url='http://localhost:8080/'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private Http:HttpClient,) { }

  createComment(postId:any,postedBy:string,contant:string):Observable<any>{
    const params={
      postId:postId,
      postedBy:postedBy
    }
    return this.Http.post<any>(Basic_url+`api/comments/created`,contant,{params});

  }
  getAllcommentsByPosts(postId:any):Observable<any>{
    return this.Http.get(Basic_url+`api/comments/${postId}`);
  }
}
