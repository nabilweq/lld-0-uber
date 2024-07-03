"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uber = void 0;
const trip_1 = require("./trip");
const tripMetaData_1 = require("./tripMetaData");
const common_1 = require("./common");
class Uber {
    constructor(driverMgr, riderMgr, tripMgr, strategyMgr) {
        this.driverMgr = driverMgr;
        this.riderMgr = riderMgr;
        this.tripMgr = tripMgr;
        this.strategyMgr = strategyMgr;
    }
    bookTrip(rider, startLocation, endLocation) {
        const availableDrivers = this.driverMgr.getDrivers().filter(driver => driver.status === common_1.Status.IDLE);
        const matchedDriver = this.strategyMgr.driverMatchingStrategy.findDriver(availableDrivers, startLocation);
        if (!matchedDriver) {
            return 'Our Drivers are busy right now, please check after some times';
        }
        const fare = this.strategyMgr.pricingStrategy.calculatePrice(new trip_1.Trip(0, rider, matchedDriver, startLocation, endLocation, new tripMetaData_1.TripMetaData(startLocation, endLocation, 0)));
        const tripMetaData = new tripMetaData_1.TripMetaData(startLocation, endLocation, fare);
        const trip = new trip_1.Trip(this.tripMgr.getTrips().length + 1, rider, matchedDriver, startLocation, endLocation, tripMetaData);
        this.tripMgr.addTrip(trip);
        this.driverMgr.updateDriverStatus(matchedDriver.id, common_1.Status.BOOKED);
        return trip;
    }
}
exports.Uber = Uber;
