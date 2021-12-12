import { Component, OnInit, SimpleChanges, ViewChild, Input, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { AuthorResponse } from 'src/_models/article-response.dto';
import { ArxivService } from 'src/_services/arxiv.service';

interface Article {
  id: string;
  title: string;
}

interface UniqueAuthors {
  name: string;
  articles: Article[]
}

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html'
})
export class AuthorComponent implements OnInit {

  uniqueAuthors: UniqueAuthors[] = [];

  constructor(
    private arxivService: ArxivService
  ) {

  }

  ngOnInit() {
    this.arxivService.getArxivData().subscribe( data => {
      if(!data.articles)
        return;

        var cnt = 0

        data.articles.forEach(article => {
          article.Authors.forEach(author => {

            if(cnt > 300)
              return;

            if(!this.uniqueAuthors.find(i => i.name === author.name)){
              cnt = cnt + 1

              const articles: Article[] = [{
                id: article.arxiv_id,
                title: article.title
              }];

              const newAuthor = {
                name: author.name,
                articles: articles
              }

              this.uniqueAuthors.push(newAuthor);
            } else {
              const newArticle: Article = {
                id: article.arxiv_id,
                title: article.title
              };

              this.uniqueAuthors.find(i => i.name === author.name)?.articles.push(newArticle);
            }
          })
        });

        this.uniqueAuthors.sort((a, b) => (a.name > b.name) ? 1 : -1);
      
    });
  }


}
