import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  myName = 'Rajanikant';

  personArray =[
    {
      id : 1,
      name : 'Ram'
    },
    {
      id : 2,
      name : 'Vaman'
    },
    {
      id : 3,
      name : 'Gajraj'
    },
    {
      id : 4,
      name : 'Ravan'
    }
  ];  
  constructor() { }

  ngOnInit() {
  }

}
