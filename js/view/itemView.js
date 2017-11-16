'use strict';

class ItemView {

    constructor(item, element) {
        this.itemModel = item;
        this.element = element;
        this.itemModel.addObserver(this);
        this.counter = 0;
    }

    notify() {
        this.render();
    }

    render() {

        this.element.innerHTML =
            `${this.itemModel.getText()}`;


        let self = this;
        this.element.onclick = function (model) {

            self.itemModel.text = "Clicked " + (++self.counter)
            self.itemModel.notify();
        }
    }
}