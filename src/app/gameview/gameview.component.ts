import { Component } from '@angular/core';
import { GamelogicService } from '../gamelogic.service';

@Component({
  selector: 'app-gameview',
  templateUrl: './gameview.component.html',
  styleUrls: ['./gameview.component.css']
})
export class GameviewComponent {

  
  
  constructor(public _gameLogic: GamelogicService) { }


  

  }
