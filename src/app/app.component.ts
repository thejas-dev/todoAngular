import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_todo';
  counter = 0;

  constructor(private _ngZone: NgZone){
    this._ngZone.runOutsideAngular(()=>{
      
      this.counter = 0;

      window.setTimeout(()=>{
        for(let i = 0; i < 10000000; i++){
          this.counter++;
        }

        this._ngZone.run(()=>{
          console.log("The task is completed");
        })
      },2000);

    })
  }

}
