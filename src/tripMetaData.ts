import { Location } from './location';

export class TripMetaData {
    constructor(public startLocation: Location, public endLocation: Location, public fare: number) {}
}