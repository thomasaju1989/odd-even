import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() emitNum = new EventEmitter();
  constructor() { }
  num:number = 1;
  ref:any
  ngOnInit(): void {
  }
  start(){
    this.ref = setInterval(()=>{
      this.emitNum.emit(this.num);
      this.num++
    },1000)
  }
  pause(){
    clearInterval(this.ref);
  }

}
