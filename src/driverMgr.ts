import { Driver } from './driver';

export class DriverMgr {
    private drivers: Driver[] = [];

    addDriver(driver: Driver): void {
        this.drivers.push(driver);
    }

    getDrivers(): Driver[] {
        return this.drivers;
    }
}
