import { Driver } from './driver';
import { Location } from './location';

export interface DriverMatchingStrategy {
    findDriver(drivers: Driver[], location: Location): Driver | null;
}
