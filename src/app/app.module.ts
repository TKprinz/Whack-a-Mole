import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameviewComponent } from './gameview/gameview.component';
import { GamelogicService } from './gamelogic.service'

@NgModule({
  declarations: [
    AppComponent,
    GameviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GamelogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
