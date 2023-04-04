import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url= environment.url+'articles/'
  constructor(private http: HttpClient) {
  }
  getAll():Observable<Article[]>{
    return this.http.get<Article[]>(this.url)
  }
  add(p:Article){
    return this.http.post(this.url,p)
  }
  delete(id:number){
      return this.http.delete(this.url+id)
  }
  update(p:Article){
    return this.http.put(this.url+p.id,p)
  }
  search(id:number){
    return this.http.get<Article>(this.url+id)
  }
}
