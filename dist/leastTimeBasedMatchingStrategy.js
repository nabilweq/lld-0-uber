"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeastTimeBasedMatchingStrategy = void 0;
class LeastTimeBasedMatchingStrategy {
    findDriver(drivers, location) {
        return drivers.length > 0 ? drivers[0] : null;
    }
}
exports.LeastTimeBasedMatchingStrategy = LeastTimeBasedMatchingStrategy;
