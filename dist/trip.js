"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trip = void 0;
class Trip {
    constructor(id, rider, driver, startLocation, endLocation, metaData) {
        this.id = id;
        this.rider = rider;
        this.driver = driver;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.metaData = metaData;
    }
}
exports.Trip = Trip;
