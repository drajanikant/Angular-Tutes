import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  form;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl("",Validators.required ),
      lastname: new FormControl("", Validators.email),
      languages: new FormControl("")
    });

  }
  onSubmit = function (user_data) {
    console.log(user_data);
    

  }

}
