import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.component.html',
  styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {
    
  currentArticle = null;
  message = '';

  constructor(    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) {
     }

  ngOnInit(): void {
    this.getArticle(this.route.snapshot.paramMap.get('id'));
  }

  getArticle(id:any): void {
    this.articleService.read(id)
      .subscribe(
        article => {
          this.currentArticle = article;
          console.log(article);
        },
        error => {
          console.log(error);
        });
  }
  likeArticle(id:any): void {
    this.articleService.like(this.currentArticle._id, this.currentArticle)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was liked!';
          this.router.navigate(['/show/'+id]).then(() => {
            window.location.reload();
          });
        },
        error => {
          console.log(error); 
        });
  }
}
