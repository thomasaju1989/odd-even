import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() num:any;
  constructor() { }

  ngOnInit(): void {
  }

}
