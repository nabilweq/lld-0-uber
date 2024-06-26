import { Status } from './common';

export class Driver {
    constructor(
        public id: number,
        public name: string,
        public rating: number,
        public status: Status = Status.IDLE
    ) {}
}
