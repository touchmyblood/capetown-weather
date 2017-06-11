import { IForecast, IDataPoint } from './forecast.model';

export class CurrentModel {
  scale: string;
  hourlySummary: string;
  data: IDataPoint;
}
