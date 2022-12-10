import {Component, OnInit} from '@angular/core';
import {SingleMoviesService} from './singlefilm.servies';
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute} from '@angular/router';
import {faCheck, faClose} from '@fortawesome/free-solid-svg-icons';
import {SingleFilm} from "./singlefilm";

@Component({
  selector: 'app-singlefilm',
  templateUrl: './singlefilm.component.html',
  styleUrls: ['./singlefilm.component.css']
})


export class SinglefilmComponent implements OnInit {
  id: number | undefined;
  singleData: any = {};
  typeSelected: string;
  math = Math;
  current: number = 0;
  max: number = 1;
  faCorrect = faCheck;
  faWrong = faClose;
  errorMessage: any;
  loading: boolean = true;


  constructor(private singleMovies: SingleMoviesService, private SpinnerService: NgxSpinnerService, private route: ActivatedRoute) {
    this.typeSelected = 'ball-fussion';
  }

  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'], ` this.route.snapshot.params['id']`)
    this.getMovieById();
  }

  getMovieById() {
    this.singleMovies.getSingleMovie(this.route.snapshot.params['id'])
      .subscribe((response: SingleFilm) => {
        console.log(response, `response from single Movies`);
        this.singleData = response;
        this.SpinnerService.show().then();
        this.current = Math.ceil(this.singleData.vote_average) * 10;
        console.log(this.max, `this.max from single Film`);
        console.log(this.singleData, `this.single data`);
        setTimeout(() => {
          this.SpinnerService.hide().then();
        }, 2000);

      }, (error) => {
        console.log('error caught in component')
        this.errorMessage = error;
        this.loading = false
      });
  }
}
