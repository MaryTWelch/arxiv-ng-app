import { Component, OnInit } from '@angular/core';
import { ArticleResponse } from 'src/_models/article-response.dto';
import { ArxivService } from 'src/_services/arxiv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //TODO: add paging & make page look nice...

  title = 'arxiv-ng-app';
  articles: ArticleResponse[] = [];

  constructor(
    private arxivService: ArxivService
  ) {
  }

  ngOnInit(): void {
    this.arxivService.getArxivData().subscribe( data => {
      if(!data.articles)
        return;

      this.articles = data.articles
    });
  }


}
