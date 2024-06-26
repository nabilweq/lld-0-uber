"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["IDLE"] = 0] = "IDLE";
    Status[Status["BOOKED"] = 1] = "BOOKED";
    Status[Status["ON_TRIP"] = 2] = "ON_TRIP";
})(Status || (exports.Status = Status = {}));
