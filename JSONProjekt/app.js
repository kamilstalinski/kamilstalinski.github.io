let liElement = document.createElement('li');
let txtNode = document.createTextNode('Seventh (7)');
let attrNode = document.createAttribute('class');
attrNode.value = 'last';

liElement.appendChild(txtNode);
liElement.setAttributeNode(attrNode);

// let list = document.getElementById('list');
// list.appendChild(liElement);

let documentFragment = new DocumentFragment();
documentFragment.appendChild(liElement)

// list.appendChild(documentFragment);

console.log(documentFragment)


