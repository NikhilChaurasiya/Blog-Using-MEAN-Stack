import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any;
  currentArticle = null;
  currentIndex = -1;
  name = '';
  constructor(private articleService: ArticleService) {
      this. readProducts();
   }


  ngOnInit(): void {
  }

  readProducts(): void {
    this.articleService.readAll()
      .subscribe(
        products => {
          this.articles = products;
          console.log(products);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readProducts();
    this.currentArticle = null;
    this.currentIndex = -1;
  }

  setCurrentArticle(article:any, index:any): void {
    this.currentArticle= article;
    this.currentIndex = index;
  }
}
