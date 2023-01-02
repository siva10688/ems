import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-directives',
  templateUrl: './test-directives.component.html',
  styleUrls: ['./test-directives.component.css']
})
export class TestDirectivesComponent implements OnInit {
  className: string = 'txt-color-red';
  constructor() { }

  ngOnInit(): void {
    console.log(this.greenStyle);
  }

  getClass(): string {
    return 'txt-color-red';
  }

  add() {

  }

  delete() {

  }

  get greenStyle() {
    return { 'color': 'green' };
  }

  get show() {
    return false;
  }
}
