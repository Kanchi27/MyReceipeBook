import { Component } from '@angular/core';
import {LoggingService} from './logging.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoggingService]
})
export class AppComponent {
  loadedFeature='receipe';

 constructor(private loggingService:LoggingService){}

  /*onNavigate(feature:string){
    this.loadedFeature=feature;
    this.loggingService.logStatusChange(feature)
  }*/

  ngOnInit(){
  /*  const MyNumbers=Observable.interval(1000);
    MyNumbers.subscribe(
      (number:number)=>{
        console.log(number);
      }
    );*/
    const myObservable=Observable.create((observer: Observer<string>)=>{
        setTimeout(()=>{
          observer.next('first package');
        },2000);
        setTimeout(()=>{
          observer.next('second package');
        },4000);
      /*  setTimeout(()=>{
          observer.error('this does not work');
        },5000);*/
         setTimeout(()=>{
          observer.complete();
        },5000);
          setTimeout(()=>{
          observer.error('this does not work');
        },5000);
         setTimeout(()=>{
          observer.next('third package');
        },5000);
    });
    myObservable.subscribe(
      (data:string)=>{
        console.log(data);
      },
       (error:string)=>{
        console.log(error);
      },
       ()=>{
        console.log('completed');
      }
    );

  }
}
