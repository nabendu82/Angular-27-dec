import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //numbers = [1, 2, 3, 4, 5];
  evens = [2, 4, 6, 8, 10];
  odds = [1, 3, 5, 7, 9];
  onlyOdd = false;
  item = 17;
}
