import { Driver } from './driver';
import { Rider } from './rider';
import { Location } from './location';
import { TripMgr } from './tripMgr';
import { DriverMgr } from './driverMgr';
import { RiderMgr } from './riderMgr';
import { StrategyMgr } from './strategyMgr';
import { RatingBasedPricingStrategy } from './ratingBasedPricingStrategy';
import { LeastTimeBasedMatchingStrategy } from './leastTimeBasedMatchingStrategy';
import { Uber } from './uber';
import { Trip } from './trip';

const driverMgr = new DriverMgr();
const riderMgr = new RiderMgr();
const tripMgr = new TripMgr();
const pricingStrategy = new RatingBasedPricingStrategy();
const driverMatchingStrategy = new LeastTimeBasedMatchingStrategy();
const strategyMgr = new StrategyMgr(pricingStrategy, driverMatchingStrategy);
const uber = new Uber(driverMgr, riderMgr, tripMgr, strategyMgr);

// creating sample drivers, riders and locations to test
const driver = new Driver(1, 'John Doe', 4.9);
const rider = new Rider(4, 'Jane Doe');
const startLocation = new Location(37.7749, -122.4194);
const endLocation = new Location(34.0522, -118.2437);

driverMgr.addDriver(driver);
riderMgr.addRider(rider);

const trip:Trip | string = uber.bookTrip(rider, startLocation, endLocation);
console.log(trip);
