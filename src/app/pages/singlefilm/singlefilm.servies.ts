import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {SingleFilm} from "./singlefilm";

@Injectable({
  providedIn: 'root'
})
export class SingleMoviesService {
  id?: number;
  private OneUrl = `https://api.themoviedb.org/3/movie/`;
  private TwoUrl = `?api_key=8ca7086260d6440956c15917b02b2ef1&language=en-US`;
  route: any;

  constructor(private httpClient: HttpClient) {
  }

  public getSingleMovie(id: number): Observable<SingleFilm> {
    // @ts-ignore
    return this.httpClient.get(this.OneUrl + id + this.TwoUrl).pipe(tap((data: SingleFilm) => {
        console.log(data, `data`);
      }),
      catchError((err) => {
        console.log(err['error'], 'error caught in service');
        return throwError(err);
      })
    )
  }
}
