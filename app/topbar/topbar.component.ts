import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  data;
 onClick() {
   this.data = "hello";
   
  

 }

  constructor() { }

  ngOnInit(): void {
  }

}
