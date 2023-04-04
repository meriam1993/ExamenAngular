import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {
  article: Article;
  action: string;

  constructor(private articleService: ArticleService,
    private route:Router,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.activatedRoute.snapshot.params['id']);
    let id=this.activatedRoute.snapshot.params['id']
    this.article = new Article()
    this.action="add"
    if(id!=null){
      this.action="update"
      this.articleService.search(id).subscribe(
        (response:Article)=>{this.article=response}
      )
    }
  }

  saveArticle()
  {
    console.log(this.article.id);
    if(this.action==="add"){
      this.articleService.add(this.article).subscribe(
        ()=>{this.route.navigate(['/list']);}
      )

    }else{
      this.articleService.update(this.article).subscribe(
        ()=>{this.route.navigate(['/list']);}
      )
    }


  }

}
