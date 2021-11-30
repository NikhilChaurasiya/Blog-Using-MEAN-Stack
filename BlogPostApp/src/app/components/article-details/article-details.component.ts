import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  
  currentArticle = null;
  message = '';

  constructor(    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) {
     }

  ngOnInit(): void {
    this.message = '';
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

  updateArticle(): void {
    this.articleService.update(this.currentArticle._id, this.currentArticle)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          this.router.navigate(['/articles']);
        },
        error => {
          console.log(error); 
        });
  }

  deleteArticle(): void {
    this.articleService.delete(this.currentArticle._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/articles']);
        },
        error => {
          console.log(error);
        });
  }
}
