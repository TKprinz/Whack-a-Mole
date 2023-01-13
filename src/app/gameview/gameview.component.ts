
import { Component } from '@angular/core';
import { GamelogicService } from '../gamelogic.service';
@Component({
  selector: 'app-gameview',
  templateUrl: './gameview.component.html',
  styleUrls: ['./gameview.component.css']
})
export class GameviewComponent {
    EventGrid: string[][];
  
  constructor(public _gameLogic: GamelogicService) {
    this.EventGrid = this._gameLogic.EventGrid
  }

  

}
