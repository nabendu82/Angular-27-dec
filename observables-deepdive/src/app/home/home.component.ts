import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 2) {
          observer.complete();
        }
        if(count>4){
          observer.error(new Error('Count is greater than 4'));
        }
        count++;
      }, 1000)
    })
    this.firstObsSubscription = customObservable.subscribe(data => {
      console.log(data);
    }, error => console.log(error), () => console.log('Completed'))
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
