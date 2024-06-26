"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPricingStrategy = void 0;
class DefaultPricingStrategy {
    calculatePrice(trip) {
        const baseFare = 5;
        const pricePerMile = 2;
        const distance = this.calculateDistance(trip.startLocation, trip.endLocation);
        return baseFare + pricePerMile * distance;
    }
    calculateDistance(start, end) {
        return Math.sqrt(Math.pow(start.latitude - end.latitude, 2) + Math.pow(start.longitude - end.longitude, 2));
    }
}
exports.DefaultPricingStrategy = DefaultPricingStrategy;
