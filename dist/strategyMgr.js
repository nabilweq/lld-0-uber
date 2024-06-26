"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyMgr = void 0;
class StrategyMgr {
    constructor(pricingStrategy, driverMatchingStrategy) {
        this.pricingStrategy = pricingStrategy;
        this.driverMatchingStrategy = driverMatchingStrategy;
    }
}
exports.StrategyMgr = StrategyMgr;
