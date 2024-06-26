// src/uber.ts
import { DriverMgr } from './driverMgr';
import { RiderMgr } from './riderMgr';
import { TripMgr } from './tripMgr';
import { StrategyMgr } from './strategyMgr';
import { Trip } from './trip';
import { Rider } from './rider';
import { Location } from './location';
import { TripMetaData } from './tripMetaData';
import { Status } from './common';

export class Uber {
    constructor(
        private driverMgr: DriverMgr,
        private riderMgr: RiderMgr,
        private tripMgr: TripMgr,
        private strategyMgr: StrategyMgr
    ) {}

    bookTrip(rider: Rider, startLocation: Location, endLocation: Location): Trip | null {
        const availableDrivers = this.driverMgr.getDrivers().filter(driver => driver.status === Status.IDLE);
        const matchedDriver = this.strategyMgr.driverMatchingStrategy.findDriver(availableDrivers, startLocation);

        if (!matchedDriver) {
            return null;
        }

        const fare = this.strategyMgr.pricingStrategy.calculatePrice(
            new Trip(0, rider, matchedDriver, startLocation, endLocation, new TripMetaData(startLocation, endLocation, 0))
        );
        const tripMetaData = new TripMetaData(startLocation, endLocation, fare);

        const trip = new Trip(
            this.tripMgr.getTrips().length + 1,
            rider,
            matchedDriver,
            startLocation,
            endLocation,
            tripMetaData
        );

        this.tripMgr.addTrip(trip);
        matchedDriver.status = Status.BOOKED;

        return trip;
    }
}
