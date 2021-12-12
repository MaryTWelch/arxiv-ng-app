import { Component, OnInit, SimpleChanges, ViewChild, Input, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { ArticleResponse } from 'src/_models/article-response.dto';
import { ArxivService } from 'src/_services/arxiv.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
    
  articles: ArticleResponse[] = [];
    
  constructor(
    private arxivService: ArxivService
  ) {
 //   this.componentDestroyed = new Subject();
  }

  ngOnInit() {
    this.arxivService.getArxivData().subscribe( data => {
      if(!data.articles)
        return;

      this.articles = data.articles.filter(article => parseInt(article.id) < 21);
    });
  }


}