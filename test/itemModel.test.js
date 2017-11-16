'use strict';

class MockObserver
{
    constructor()
    {
        this.nofifyed = false;
    }
    notify()
    {
        this.nofifyed = true;
    }

    isNotifyed()
    {
        return this.nofifyed;
    }
}

describe('ItemModel tests', function () {

    var mockObserver;
    beforeEach(function () {
        mockObserver = new MockObserver();
    });

    it('ItemModel notify something to observer', function () {

        var itemModel = new ItemModel();
        itemModel.addObserver(mockObserver);
        itemModel.notify();

        expect(mockObserver.isNotifyed()).equal(true);
    });
})