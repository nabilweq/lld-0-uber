import { Driver } from './driver';
import { Rider } from './rider';
import { Location } from './location';
import { Trip } from './trip';

const driver = new Driver(1, 'John Doe', 4.9);
const rider = new Rider(1, 'Jane Doe');
const startLocation = new Location(37.7749, -122.4194);
const endLocation = new Location(34.0522, -118.2437);

const trip = new Trip(1, rider, driver, startLocation, endLocation);

console.log(trip);
