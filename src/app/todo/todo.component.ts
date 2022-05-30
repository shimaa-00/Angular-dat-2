import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  list: String[] = [];
  filteredText: String[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  add(text: String){
    this.list.push(text);
    this.filteredText=this.list;
  }

  delete(i: number){
    console.log(i);
    this.list.splice(i,1);
    this.filteredText=this.list;
  }

  filtered(text: string){
    return this.list.filter(function(ele_val) {
      return ele_val.indexOf(text) !== -1
      }) 
  }

  filter(text:string){
    if(text.length==0) this.filteredText=this.list;
    this.filteredText= this.filtered(text);
  }   


}
