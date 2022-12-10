import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {Search} from "./search";
import {Movie} from "../../services/movies/movies";

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private url = `https://api.themoviedb.org/3/search/movie?api_key=8ca7086260d6440956c15917b02b2ef1`;
  query: string = '';

  constructor(private httpClient: HttpClient) {
  }

  public getMoviesBySearch(query: string, page: number): Observable<Search> {
    console.log('@@@@@@@RUNNING@@@@@@@@@@@@');
    // @ts-ignore

    return this.httpClient.get(this.url + '&query=' + query + '&page=' + page).pipe(tap((data: Movie) => {
      console.log(data);
    }), catchError((err) => {
      console.log(err['error'], 'error caught in service');
      return throwError(err);
    }))
  }

}


