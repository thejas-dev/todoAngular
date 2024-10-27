import {Component, NgZone} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgIf} from '@angular/common';

@Component({
  selector: 'ng-zone-demo',
  imports:[CommonModule],
  standalone:true,
  template: `
    <h2>Demo: NgZone</h2>

    <p>Progress: {{progress}}%</p>
    <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>

    <button (click)="processWithinAngularZone()">Process within Angular zone</button>
    <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
  `,
})

export class NgZoneDemo {
  progress: number = 0;
  label!: string;

  constructor(private _ngZone: NgZone) {}

    processWithinAngularZone(){
        this.label = "inside";
        this.progress = 0;
        this._incrementCounter(()=>console.log("Inside Done"));
    }

    processOutsideOfAngularZone(){
        this.label = "outside";
        this.progress = 0;
        this._ngZone.runOutsideAngular(()=>{
            this._incrementCounter(()=>{
                this._ngZone.run(()=>console.log("inside done"))
            });
        })
    }

    _incrementCounter(callBack: () => void){
        this.progress++;

        if(this.progress < 100){
            window.setTimeout(()=>this._incrementCounter(callBack),10);
        }else{
            callBack();
        }
    }


}