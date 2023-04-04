import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  public title: string;
  public list: Article[];
  article: Article;
  motcle:string;


  constructor( private articleService: ArticleService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    if (id != null) {
      this.articleService.search(id).subscribe((response: Article) => {
        this.article = response;
      });
    }
    this.articleService.getAll().subscribe((response: Article[]) => {
      this.list = response;
    });
  }

  deleteArticle(article:Article){
    let i= this.list.indexOf(article)
    this.articleService.delete(article.id).subscribe(
      ()=>{this.list.splice(i,1)


    })
  }



}
