'use strict';

describe('ItemView tests', function () {

    let element, MODEL_CONTENT;

    beforeEach(function () {
        element = document.createElement('li');
        MODEL_CONTENT = "Coffee";
    })

    it('render the ItemView', function () {

        new ItemView(new ItemModel(MODEL_CONTENT), element).render();

        expect(element.innerHTML).equal(MODEL_CONTENT);
    });


    it('two click on ItemView', function () {

        new ItemView(new ItemModel(MODEL_CONTENT), element).render();
        element.click();
        element.click();

        expect(element.innerHTML).equal('Clicked 2');
    });
})