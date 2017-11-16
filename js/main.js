var target = document.querySelector('ul.ulClass');
var li = target.appendChild(document.createElement('li'));
var div = document.querySelector('h3.h3Class');;

let model = new ItemModel("Coffee");

new ItemView(model,li).render();
new H3View(model,div);
