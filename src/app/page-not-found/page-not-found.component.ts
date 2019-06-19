import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy  {
  subscription : Subscription ;
  constructor() { }
  ngOnInit() {
    //Creating a custom observable
    const customObservable = Observable.create (observer => {
        let count=0 ;
        setInterval (
          ()=> {
            observer.next(count) ;
            count++ ;
            if (count > 10) {
              observer.complete() ;
            }
            if (count > 11) {
              observer.error (new Error ('counter is greater than 3!'))
            }},1000);
    });
    // subscribing to the observable
    this.subscription=customObservable
    .pipe(map ((data)=> {return ('Round ' + data);}))
    .subscribe (count => {
       console.log(count) ;
     }, error => { 
          alert(error.message);
        }, () => {
          console.log("Completed!") ;
        }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe() ;
  }
}
