'use strict';

describe('H3View tests', function () {

    let element, MODEL_CONTENT;

    beforeEach(function () {
        element = document.createElement('li');
        MODEL_CONTENT = "H3 Coffee";
    })

    it('render the H3View', function () {

        new H3View(new ItemModel(MODEL_CONTENT), element).render();

        expect(element.innerHTML).equal(MODEL_CONTENT);
    });
})