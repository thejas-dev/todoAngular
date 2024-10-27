import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone:true,
    name:"reverse"
})

export class ReversePipe implements PipeTransform{
    transform(value: string) {
        let tempStr:string = "";

        for(let i = value.length - 1; i >=0 ; i--){
            tempStr += value[i];
        }

        return tempStr;
    }

}