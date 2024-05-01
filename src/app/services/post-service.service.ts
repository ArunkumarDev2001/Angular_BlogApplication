import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const Basic_url='https://springbootblog.onrender.com/'
// const Basic_url='http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }
  createNewPost(data:any):Observable<any>{
    return this.http.post(Basic_url+`api/posts`,data);
  }

  getAllPost():Observable<any>{
    return this.http.get(Basic_url+`api/posts/getAll`);
  }


  getPostById(postId:any):Observable<any>{
    return this.http.get<any>(Basic_url+`api/posts/${postId}`);
  }

  likePost(postId:any):Observable<any>{
    return this.http.put(Basic_url+`api/posts/${postId}/like`,{});
  }

  searchByName(name:string):Observable<any>{
    return this.http.get(Basic_url+`api/posts/search/${name}`);
  }
}

