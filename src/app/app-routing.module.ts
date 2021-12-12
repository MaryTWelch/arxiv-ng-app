import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { AuthorComponent } from './components/author/author.component';

const routes: Routes = [
  { path: 'articles', component: ArticleComponent},
  { path: 'authors', component: AuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
