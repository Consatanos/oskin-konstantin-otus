import { simpleTree } from "./mock";
import { Tree } from "./models";

import './components/my-tree';
import './components/my-leaf';

const cunstructTree = (arr: Tree[], parentId?: number): void => {
    const { id, items } = arr[0];

    createTree(id, parentId);

    if (!items) {
        return;
    }

    cunstructTree(items, id);
}

const createTree = (id: number, parentId: any): void => {
    const list: HTMLElement = document.createElement('my-tree');
    const listItemTree: HTMLElement = createItem();
    const listItemId: HTMLElement = createItem(`id: ${id}`);

    list.id = id.toString();
    list.appendChild(listItemId);
    list.appendChild(listItemTree);

    if (parentId) {
        document.getElementById(parentId).querySelector('my-leaf:last-child').appendChild(list);
    } else {
        document.body.appendChild(list);
    }
}

const createItem = (value?: string): HTMLElement => {
    const item: HTMLElement = document.createElement('my-leaf');

    if (value) {
        item.textContent = value;
    }

    return item;
}

cunstructTree(simpleTree);