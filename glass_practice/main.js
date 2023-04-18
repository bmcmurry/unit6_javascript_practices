"use strict";

class Glass {
    constructor(capacity, amount = 0) {
        this.capacity = capacity
        this.amount = amount
    };
    addWater(amount) {
        if (amount >= (this.capacity + this.amount)) {
            this.amount = this.capacity;
        } else {
            this.amount += amount;
        }
    };
    fillErUp() {
        this.amount = this.capacity;
    };
    emptyGlass() {
        this.amount = 0;
    };
    removeWater(amount) {
        if (amount <= this.amount) {
            this.amount -= amount;
        } else {
            this.amount = 0;
        }
    };
}