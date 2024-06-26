import { DriverMatchingStrategy } from './driverMatchingStrategy';
import { Driver } from './driver';
import { Location } from './location';

export class LeastTimeBasedMatchingStrategy implements DriverMatchingStrategy {
    findDriver(drivers: Driver[], location: Location): Driver | null {
        // Placeholder logic to find the closest driver
        return drivers.length > 0 ? drivers[0] : null;
    }
}
