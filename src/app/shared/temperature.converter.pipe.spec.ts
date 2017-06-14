import { TemperatureConverterPipe } from './temperature.converter.pipe'

describe('TemperatureConverterPipe', () => {
  const temperatureConverterPipe: TemperatureConverterPipe = new TemperatureConverterPipe;

  it('Convert to F should round to 0 decimal places', () => {
    const result = temperatureConverterPipe.transform(52.47, 'F');
    expect(result).toBe(52);
  });

  it('Convert 52.47F to celsius should return 11C', () => {
    const result = temperatureConverterPipe.transform(52.47, 'C');
    expect(result).toBe(11);
  });

})
