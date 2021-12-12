import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //TODO: add paging & make page look nice...

  title = 'arxiv-ng-app';

  constructor(
  ) {
  }

  ngOnInit(): void {
    console.log('app-root initialized');
  }


}
