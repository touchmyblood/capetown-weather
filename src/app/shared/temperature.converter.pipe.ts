import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: number, scale: string) {
    if (value && !isNaN(value)) {
      if (scale === 'F') {
        // We only receive temps in F, so just
        // round to 0 places and return
        return Math.round(value);
      }  else
        if (scale === 'C') {
          const temperature = (value - 32) / 1.8;
          return Math.round(temperature);
        }
    }
    return;
  }
}
