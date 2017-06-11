import { Pipe, PipeTransform } from '@angular/core';


//TODO rename to... something else
@Pipe({
  name: 'unixTimeStampFormatterPipe'
})
export class UnixTimeStampFormatterPipe implements PipeTransform {
  transform(unixTimeStamp: number, format?: string) {
    let date = new Date(unixTimeStamp * 1000);

    if (format) {
      if (format === "EEEE") {
        let result = date.toString().slice(0,7);
        //  + ' ' +              //Day and Month
        //            date.getDate() + ' ' +                          //Day number
        //            date.toTimeString().slice(0,8) + ' ' +          //HH:MM:SS
        //            /\(.*\)/g.exec(date.toString())[0].slice(1,-1)  //TimeZone
        //            + ' '  + date.getFullYear();                    //Year

      return result;

      }

    }



    let result = date.getHours().toString();
    if (date.getHours()>11){
      result+='pm';
    } else{
      result+='am';
    }

    return result;
  }
}
