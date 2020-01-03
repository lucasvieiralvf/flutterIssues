import { Component, OnInit } from '@angular/core';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css', '../utils/default.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[];

  constructor() { }

  ngOnInit() {
    this.issues = [
      new Issue('testeTitle', 'testeSubTitle', 'testeText'),
      new Issue('testeTitle1', 'testeSubTitle1', 'testeText1'),
      new Issue('testeTitle2', 'testeSubTitle2', 'testeText2')
    ];
  }

}
