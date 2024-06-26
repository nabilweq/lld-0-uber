"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPricingStrategy = void 0;
class DefaultPricingStrategy {
    calculatePrice(trip) {
        const baseFare = 10;
        const pricePerMile = 2;
        const distance = this.calculateDistance(trip.startLocation, trip.endLocation);
        return baseFare + pricePerMile * distance;
    }
    calculateDistance(start, end) {
        // Simple placeholder calculation
        return Math.sqrt(Math.pow(start.latitude - end.latitude, 2) + Math.pow(start.longitude - end.longitude, 2));
    }
}
exports.DefaultPricingStrategy = DefaultPricingStrategy;
