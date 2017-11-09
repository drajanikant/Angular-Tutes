import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members = ["Vikas", "Rakesh", "Vishal"];

  constructor() { }

  ngOnInit() {
  }

  newMember = "";

  addMember = function(){
    if(this.newMember != ''){
      this.members.push(this.newMember);
      this.newMember = '';
    }    
  }

  removeMembers = function(index){
    this.members.splice(index,1);

  }
}
