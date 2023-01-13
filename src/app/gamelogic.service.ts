
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';                    // import för att kunna använda servicen i komponenter.
@Injectable({
  providedIn: 'root'
})
export class GamelogicService {
  constructor() { 
    interval(100).subscribe(() => {
      if (this.clockStarted) {
        this.randomizeBox();
      }
    });
  }
  result = 0;                                       // Anger ett startvärde för resultatet av spelet.
  timeRemains: number = 0;                          // Tid som återstår i spelet.
  clockStarted: boolean = false;                    // Om spelet har startat eller inte.
  timeLeft = 60;                                    // Tid som återstår i spelet i sekunder.
  img = ['https://static.vecteezy.com/system/resources/previews/013/548/501/original/cute-little-mole-cartoon-comes-out-from-of-the-hole-vector.jpg']
  moleCounter = 0;
  gameStarted = false;
  clockInterval: any;

  EventGrid: string [][] = [                          // Skapar 2 Arrayer som representerar spelplanen med 5x5 rutor.
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
  ];
  randomizeBox() {                                    // Tre stycken moles visas, randomized. 
    if (this.moleCounter >= 3) {
      return;
    }
    const randomRow = Math.floor(Math.random() * 5);
    const randomCell = Math.floor(Math.random() * 5);
    const randomImg = Math.floor(Math.random() * this.img.length);
    this.EventGrid[randomRow][randomCell] = this.img[randomImg];
    this.moleCounter++;
  
    setTimeout(() => {
      this.EventGrid[randomRow][randomCell] = '';
      this.moleCounter--;
    }, 4000);
  }
  
  moleClick(indexRow: number, indexCell: number) {
    if (this.EventGrid[indexRow][indexCell] !== "") {
      this.EventGrid[indexRow][indexCell] = "";
      this.moleCounter++;
    }
  }

  startClock() {
    this.clockStarted = true;
    this.result = 0;
    this.timeLeft = 10;                                       // Varje gång den startar, återställer till noll. 
    this.clockInterval = setInterval(() => {                  // Sätter igång en timer.
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.clockInterval);
        this.timeLeft = 10
        this.clockStarted = false;
        this.resetBox();
      }
    }, 1000);
  }
  
  resetBox() {
    this.EventGrid.forEach((row) => {
      row.fill("")
    })

  }

}