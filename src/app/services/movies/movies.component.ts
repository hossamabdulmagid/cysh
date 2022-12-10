import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies-service';
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from "./movies";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  allMovies: any;
  page: number = 1;
  itemsPerPage = 8;
  totalItems: any;
  search: any;
  errorMessage: any;
  loading: boolean = true;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  formSearch: any;
  formGroup: any;

  constructor(private movies: MoviesService, private SpinnerService: NgxSpinnerService, private router: Router) {
  }


  ngOnInit() {
    this.getMovieByPage();
  }

  modelChangeFn(e: any) {
    console.log(e, `e`);
    this.search = e;
    console.log(this.search, `this.search`);
  }


  getMovieByPage() {
    this.errorMessage = "";

    this.movies.getMovies(this.page)
      .subscribe(
        (response: Movie) => {
          this.SpinnerService.show().then();
          console.log(response, `response`);
          this.allMovies = response.results;
          this.totalItems = response.total_pages;
          setTimeout(() => {
            this.SpinnerService.hide().then();
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }, 2000)
        }, (error) => {
          console.log('error caught in component')
          this.errorMessage = error;
          this.loading = false
        });
  }


  pageChangeEvent(event: number) {
    this.page = event;
    this.getMovieByPage();
  }

  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('Form is valid', this.form.value.name);
      this.router.navigate([`/search/${this.form.value.name}`]);
    } else {
      console.log('Form is not valid');
    }
    //de
  }
}
