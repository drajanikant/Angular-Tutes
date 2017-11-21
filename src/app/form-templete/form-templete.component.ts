import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-templete',
  templateUrl: './form-templete.component.html',
  styleUrls: ['./form-templete.component.css']
})
export class FormTempleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    firstname: "",
    lastname: "",
    languages: ""
  };
  onSubmit = function (user_data) {
    console.log(user_data);
    this.user = user_data;

  }
}
