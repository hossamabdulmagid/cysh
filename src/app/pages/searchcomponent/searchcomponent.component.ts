import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {SearchService} from './search-servies';
import {Search} from "./search";

@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchComponent implements OnInit {
  query?: string = '';
  data: any = [];
  page: number = 1;
  totalItems: number = 1;
  loading: boolean = true;
  errorMessage: any;

  constructor(private search: SearchService, private SpinnerService: NgxSpinnerService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getBySearch();

  }

  getBySearch() {
    this.search.getMoviesBySearch(this.route.snapshot.params['query'], this.page)
      .subscribe((response: Search) => {
        console.log(response, `response`)
        this.SpinnerService.show().then();
        this.data = response;
        this.totalItems = response.total_pages;
        setTimeout(() => {
          this.SpinnerService.hide().then();
        }, 2000);
      }, (error) => {
        console.log('error caught in component')
        this.errorMessage = error;
        this.loading = false
      });
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.getBySearch();
  }
}
