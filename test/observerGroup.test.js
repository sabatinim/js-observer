'use strict';

describe('event bus', function () {
    var observerGroup;

    beforeEach(function () {
        observerGroup = new ObserverGroup();
    })

    it('removes event', function () {
        var obs0 = {}, obs1 = {}

        observerGroup.add(obs0)
        observerGroup.add(obs1)

        expect(observerGroup.contains(obs0)).equal(true);
        expect(observerGroup.contains(obs1)).equal(true);

        observerGroup.remove(obs0)

        expect(observerGroup.contains(obs0)).equal(false);
        expect(observerGroup.contains(obs1)).equal(true);
    })

    it('complains when trying to remove non-existing observer', function () {
        var obs = {}
        observerGroup.add(obs)

        expect(() => {
            observerGroup.remove(42)
        }).to.throw(Error)

        expect(observerGroup.contains(obs)).equal(true);
    })

});