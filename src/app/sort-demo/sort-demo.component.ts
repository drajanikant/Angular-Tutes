import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-demo',
  templateUrl: './sort-demo.component.html',
  styleUrls: ['./sort-demo.component.css']
})
export class SortDemoComponent implements OnInit {

  arr = [1, 4, 6, 3, 1, 0];

  day = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
