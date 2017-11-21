import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-converter',
  templateUrl: './base-converter.component.html',
  styleUrls: ['./base-converter.component.css']
})
export class BaseConverterComponent implements OnInit {

  form;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      decimal: new FormControl(""),
      binary: new FormControl(""),
      octal: new FormControl(""),
      hexa: new FormControl("")
    });
  }

  decimalChanged = function (oldValue, newValue) {
    if (newValue != '') {
      this.form.patchValue({
        binary: parseInt(newValue, 10).toString(2),
        octal: parseInt(newValue, 10).toString(8),
        hexa: parseInt(newValue, 10).toString(16)
      });
    }
    else{
      this.form.patchValue({
        binary: newValue,
        octal: newValue,
        hexa: newValue
      });
    }
  }
}
