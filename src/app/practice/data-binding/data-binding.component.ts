import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  // template:`<h1>Hello</h1>`,
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name: string = 'Welcome to Binding';
  constructor() { }

  ngOnInit(): void {
  }

  display() {
    window.alert('clicked');
  }
}
