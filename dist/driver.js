"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const common_1 = require("./common");
class Driver {
    constructor(id, name, rating, status = common_1.Status.IDLE) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.status = status;
    }
}
exports.Driver = Driver;
