"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiderMgr = void 0;
class RiderMgr {
    constructor() {
        this.riders = [];
    }
    addRider(rider) {
        this.riders.push(rider);
    }
    getRiders() {
        return this.riders;
    }
}
exports.RiderMgr = RiderMgr;
