import { Directive, ElementRef } from "@angular/core";

@Directive({
    standalone:true,
    selector:'[background]'
})

export class BackgroundChange{
    constructor(private element:ElementRef){
        this.element.nativeElement.style.backgroundColor = "rgb(1, 100, 136)";
    }

};