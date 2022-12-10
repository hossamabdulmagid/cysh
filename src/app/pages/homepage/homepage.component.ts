import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.ScrollToTop();
  }


  ScrollToTop() {
    return this.onActivate
  }

  onActivate(event: Event) {
    // window.scroll(0,0);
    // console.log('@scroll to Top @@Running');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // new line for deployment
    // new line for deployment
    // new line for deployment

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)

  }
}
