import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  pageSelected: PageEnum;

  PageEnum = PageEnum;

  ngOnInit() {

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.urlAfterRedirects == '/issues') {
          this.pageSelected = PageEnum.issues;
        } else if (val.urlAfterRedirects == '/pr') {
          this.pageSelected = PageEnum.pullRequest;
        }
      }
    })
  }

}

enum PageEnum {
  issues,
  pullRequest
}