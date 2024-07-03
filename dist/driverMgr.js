"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverMgr = void 0;
class DriverMgr {
    constructor() {
        this.drivers = [];
    }
    addDriver(driver) {
        this.drivers.push(driver);
    }
    getDrivers() {
        return this.drivers;
    }
    updateDriverStatus(driverId, status) {
        const driver = this.drivers.find(d => d.id === driverId);
        if (driver) {
            driver.status = status;
        }
    }
}
exports.DriverMgr = DriverMgr;
