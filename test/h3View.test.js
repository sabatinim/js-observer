'use strict';

describe('H3View tests', function () {

    const MODEL_CONTENT = "H3 Coffee";

    let element;

    beforeEach(function () {
        element = document.createElement('li');
    })

    it('render the H3View', function () {
        new H3View(new ItemModel(MODEL_CONTENT), element).render();

        expect(element.innerHTML).equal(MODEL_CONTENT);
    });
})