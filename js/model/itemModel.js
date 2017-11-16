'use strict';

class ItemModel {

    notify() {
        this.observers.notify(this);
    }

    constructor(text) {
        this.text = text;
        this.observers = new ObserverGroup();
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    getText() {
        return this.text;
    }
}