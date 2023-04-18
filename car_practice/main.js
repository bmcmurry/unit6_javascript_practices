'use strict';

class Car {
    constructor (make, model) {
        this.make = make;
        this.model = model;
        this.state = "PARKED";
        this.mileage = 0;
    };

    drive(mileage) {
        this.mileage += mileage;
        if (this.state == "PARKED") {
            this.state = "DRIVING";
        }
    };
    brake() {
        if (this.state == "DRIVING") {
            this.state = "STOPPED";
        }
    };
    park() {
        if (this.state == "STOPPED") {
            this.state = "PARKED";
        }
    };
}