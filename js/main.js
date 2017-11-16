let target = document.querySelector('ul.ulClass');
let li = target.appendChild(document.createElement('li'));
let h3 = document.querySelector('h3.h3Class');

let model = new ItemModel("Click me!!!");
new ItemView(model,li).render();
new H3View(model,h3);
