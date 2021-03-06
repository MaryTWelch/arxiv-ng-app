import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ArticleResponse, ArxivDataResponse } from 'src/_models/article-response.dto';

@Injectable()
export class ArxivService {

    private backEndBaseUrl = 'http://localhost:8080/api'

    constructor(
        private http: HttpClient
    ) { }

    getArxivData(): Observable<ArxivDataResponse> {
        const url = this.backEndBaseUrl + '/article/getAll';
        const httpParams = new HttpParams();

        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
        return this.http.get<ArxivDataResponse>(url, { params: httpParams,responseType: 'json' })
          .pipe(
              tap(_ => console.log('fetched Arxiv data')),
              catchError(this.errorHandler)
          );
      }

  /** Error Handling method */

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
