import { Rider } from './rider';
import { Driver } from './driver';
import { Location } from './location';
import { TripMetaData } from './tripMetadata';

export class Trip {
    constructor(
        public id: number,
        public rider: Rider,
        public driver: Driver,
        public startLocation: Location,
        public endLocation: Location,
        public metaData: TripMetaData
    ) {}
}
