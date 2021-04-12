import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class CustomPipe implements PipeTransform {
    // transform(value: any,start:number=0,end:number=10) {
        transform(value: any,start:number,end:number) {

        if(value==null){
            return value;
        }

        let temp=(<string> value);

        let minindex=start?start:0;
        let maxindex=end?end:10;

    //    return (temp.substring(0,10)+" ...");
    // return (temp.substring(start,end)+" ...");
    return (temp.substring(minindex,maxindex)+" ...");
       
    }

}