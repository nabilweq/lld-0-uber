"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripMgr = void 0;
class TripMgr {
    constructor() {
        this.trips = [];
    }
    addTrip(trip) {
        this.trips.push(trip);
    }
    getTrips() {
        return this.trips;
    }
}
exports.TripMgr = TripMgr;
