import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  article = {
    title: '',
    category: '',
    content: ''
  };
  submitted = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  createArticle(): void {
    const data = {
      title: this.article.title,
      category: this.article.category,
      content: this.article.content
    };
    this.articleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
      });
  }

      newArticle(): void {
        this.submitted = false;
        this.article = {
          title: '',
          category: '',
          content: ''
        };
      }
}
