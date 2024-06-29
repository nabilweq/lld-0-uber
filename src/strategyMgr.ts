import { PricingStrategy } from './pricingStrategy';
import { DriverMatchingStrategy } from './driverMatchingStrategy';

export class StrategyMgr {
    constructor(
        public pricingStrategy: PricingStrategy, 
        public driverMatchingStrategy: DriverMatchingStrategy,
    ) {}
}
