import { simpleTree } from './mock';
import './components/my-tree';
import './components/my-leaf';

console.log('Hola Amigo');

const cunstructTree = (arr, parentId) => {
    const { id, items } = arr[0];

    createTree(id, parentId);

    if (!items) {
        return;
    }

    cunstructTree(items, id);
}

const createTree = (id, parentId) => {
    const list = document.createElement('my-tree');
    const listItemTree = createItem();
    const listItemId = createItem(`id: ${id}`);

    list.id = id;
    list.appendChild(listItemId);
    list.appendChild(listItemTree);

    if (parentId) {
        document.getElementById(parentId).querySelector('my-leaf:last-child').appendChild(list);
    } else {
        document.body.appendChild(list);
    }
}

const createItem = (value) => {
    const item = document.createElement('my-leaf');

    if (value) {
        item.textContent = value;
    }

    return item;
}

cunstructTree(simpleTree);