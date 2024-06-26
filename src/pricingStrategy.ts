import { Trip } from './trip';

export interface PricingStrategy {
    calculatePrice(trip: Trip): number;
}