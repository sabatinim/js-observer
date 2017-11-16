'use strict';

class ObserverGroup {

    constructor() {
        this.observers = [];

    }

    notify(subject) {
        this.observers.forEach(function (observer) {
            observer.notify(subject);
        })
    }

    add(observer) {
        this.observers.push(observer);
    }

    contains(observer) {
        return this.observers.indexOf(observer) >= 0;
    }

    remove(observer) {
        if (!this.contains(observer)) {
            throw new Error(`Observer ${this.observers} not found`)
        }
        this.observers.splice(this.observers.indexOf(observer), 1)
    }
}