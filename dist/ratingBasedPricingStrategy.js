"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingBasedPricingStrategy = void 0;
class RatingBasedPricingStrategy {
    calculatePrice(trip) {
        const baseFare = 5;
        const pricePerMile = 2;
        const distance = this.calculateDistance(trip.startLocation, trip.endLocation);
        return baseFare + pricePerMile * distance - trip.driver.rating;
    }
    calculateDistance(start, end) {
        // Simple placeholder calculation
        return Math.sqrt(Math.pow(start.latitude - end.latitude, 2) + Math.pow(start.longitude - end.longitude, 2));
    }
}
exports.RatingBasedPricingStrategy = RatingBasedPricingStrategy;
