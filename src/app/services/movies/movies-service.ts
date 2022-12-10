import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Movie } from "./movies";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  page: number = 1;
  private url: string = `https://api.themoviedb.org/3/movie/popular?api_key=8ca7086260d6440956c15917b02b2ef1&language=en-US`;

  constructor(private httpClient: HttpClient) {
  }

  public getMovies(page: number): Observable<Movie> {
    // @ts-ignore
    return this.httpClient.get(this.url + '&page=' + page).pipe(tap((data: Movie) => {
      console.log(data);
    }), catchError((err) => {
      console.log(err, `error caught`);
      return throwError(err);
    }))
  }
}
