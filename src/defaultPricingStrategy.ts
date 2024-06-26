import { PricingStrategy } from './pricingStrategy';
import { Trip } from './trip';

export class DefaultPricingStrategy implements PricingStrategy {
    calculatePrice(trip: Trip): number {
        const baseFare = 5;
        const pricePerMile = 2;
        const distance = this.calculateDistance(trip.startLocation, trip.endLocation);
        return baseFare + pricePerMile * distance;
    }

    private calculateDistance(start: { latitude: number; longitude: number }, end: { latitude: number; longitude: number }): number {
        
        return Math.sqrt(Math.pow(start.latitude - end.latitude, 2) + Math.pow(start.longitude - end.longitude, 2));
    }
}
