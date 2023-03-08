import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'even-odd';
  evens:number[] = [];
  odds:number[] =[];
  catchNum(val:number){
    console.log(val);
    if(val%2==0){
      this.evens.push(val);
    }else {
      this.odds.push(val);
    }
  }
}
