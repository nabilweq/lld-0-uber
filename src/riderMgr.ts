import { Rider } from './rider';

export class RiderMgr {
    private riders: Rider[] = [];

    addRider(rider: Rider): void {
        this.riders.push(rider);
    }

    getRiders(): Rider[] {
        return this.riders;
    }
}
