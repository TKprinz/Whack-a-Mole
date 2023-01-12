import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamelogicService {

 
  result = 0;
  timeRemains: number = 0; // Tid som återstår i spelet.
  clockStarted: boolean = false; // Om spelet har startat eller inte.
  timeLeft = 60; // Tid som återstår i spelet i sekunder.
  

  constructor() { }

  
  EventGrid: string [][] = [ // Skapar 2 Arrayer som representerar spelplanen med 5x5 rutor.
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
  ];

  intervalId = setInterval(() => { // Sätter igång en timer som minskar timeLeft varje sekund och kollar om tiden har löpt.
    if (this.timeLeft > 0) {
      this.timeLeft--;
      console.log(this.timeLeft);
    } else {
      clearInterval(this.intervalId);
    }
  }, 1000);

}
