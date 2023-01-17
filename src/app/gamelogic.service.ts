import { Injectable } from '@angular/core';
import { interval } from 'rxjs';                              // Import för att kunna använda servicen i komponenter.


@Injectable({
  providedIn: 'root'
})




export class GamelogicService {

  constructor() {                                           // Konstruktorn startar en timer och kallar på "randomizeBox()" när klockan har startat.
    interval(100).subscribe(() => {                         // Intervalen kontrollerar hur snabbt moles ska poppa upp.
      if (this.clockStarted) {
        this.randomizeBox();
      }
    });
  }

  
  result: number = 0;                                         // Anger ett startvärde för resultatet av spelet.
  clockStarted: boolean = false;                              // Om spelet har startat eller inte.
  timeLeft = 60;                                              // Tid som återstår i spelet i sekunder.
  img = ['https://static.vecteezy.com/system/resources/previews/013/548/501/original/cute-little-mole-cartoon-comes-out-from-of-the-hole-vector.jpg']
  moleCounter = 0;                                            // Som kommer att hålla koll på antal counter. 
  gameStarted = false;
  clockInterval: any;


  EventGrid: string [][] = [                                  // Skapar en array av arrayer som representerar spelbanan med 5x5 rutor.
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
  ];


  randomizeBox() {                                            // Slumpar fram en rad, en cell och en bild ur en matris som slumpmässigt väljer en plats i en grid och sätter en bild på den platsen och ökar moleCounter med 1.                                
    if (this.moleCounter >= 3) {                              // Tre stycken moles visas, randomized. 
      return;                                                 // Om moleCounter är över 3 så kör den inte randomizern för att plocka fram en ny mole.
    }
    const randomRow = Math.floor(Math.random() * 5);          
    const randomCell = Math.floor(Math.random() * 5);
    this.EventGrid[randomRow][randomCell] = this.img[0];
    this.moleCounter++;
  

    setTimeout(() => {                                        // Hur lång tid det tar för att en mole ska poppa upp, var 4e sekund. 
      this.EventGrid[randomRow][randomCell] = '';
      this.moleCounter--;
    }, 4000);
  }
  

  moleClick(indexRow: number, indexCell: number) {            // När funktionen kallas på, kollar den om platsen i EventGrid är ledig. Om det inte är tomt, så sätts platsen till tomt och resultatet ökas med 1. Detta gör att varje gång man klickar på en "mole" så får man poäng. 
    if (this.EventGrid[indexRow][indexCell] !== "") {
      this.EventGrid[indexRow][indexCell] = "";
      this.result++;                                         
      
    } 
  }


  startClock() {                                              // Fungerar som en nedräknare. När funktionen kallas, så sätts värdet av clockStarted till true, result och timeLeft till 0, och en timer startas med hjälp av setInterval(). SetInterval kallar på en anonym funktion varje sekund. Om värdet av timeLeft är större än 0, fortsätter funktionen att köras. Om värdet av timeLeft är 0 eller mindre, så rensar funktionen intervallet med hjälp av clearInterval(), som sätter värdet av timeLeft till 60.
    this.clockStarted = true;
    this.result = 0;
    this.timeLeft = 60;                                       // Varje gång den startar, återställer till noll. 
    this.clockInterval = setInterval(() => {                  // Sätter igång en timer.
      if (this.timeLeft > 0) {
        this.timeLeft--;
  
      } else {
        clearInterval(this.clockInterval);                    // ClearInterval gör det möjligt att spelet blir resetat.  
        this.clockStarted = false;
        this.resetBox();
      }
    }, 1000);
  }
  

  resetBox() {                                                // Denna tömmer cellen.
    this.EventGrid.forEach((row) => {
      row.fill("")
  
    })
  }

}