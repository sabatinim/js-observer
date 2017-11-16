'use strict';

class H3View {

    notify() {
        this.render();
    }

    constructor(item, element) {
        this.itemModel = item;
        this.element = element;
        this.itemModel.addObserver(this);
    }

    render() {
        this.element.innerHTML =
            `${this.itemModel.getText()}`;
    }
}