"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove() {
        this.data.shift();
    }
}
const nameQueue = new Queue();
nameQueue.add("shazeen");
nameQueue.add("Shazeen");
const numberQueue = new Queue();
numberQueue.add(1);
numberQueue.add(2);
