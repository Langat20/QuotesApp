import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = ' Inspirational Quotes';
  quotes:Quote[] = [
    new Quote (1,'Ayzaq','Life hacks','Life is what happens when you’re busy making other plans.','Dalai Lama', new Date(2022,3,24),0,0),
    new Quote (2,'Shee','Auccess in life','Many of life’s failures are people who did not realize how close they were to success when they gave up.','John Lennon',new Date(2020,8,2),0,0),
    new Quote (3,'Mason','Life choices','Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this..','Celine Dion',new Date(2018,10,13),0,0),
    new Quote (4,'Hudson','Happiness','Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.','Leonardo DiCaprio',new Date(2021,6,9),0,0),
   
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
