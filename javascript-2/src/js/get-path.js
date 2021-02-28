const getInfo = (element) => {
    if (!element) {
        throw "Value must be defined";
    }

    if (!(element instanceof HTMLElement)) {
        throw "Value must be HTMLElement";
    }

    return getElementPart(element, '');
}

const getElementPart = (elem, res) => {
    if (elem.parentElement === null) {
        return res.toLowerCase();
    }

    const parent = elem.parentElement;
    const elemClass = elem.classList.value ? `.${elem.classList.value.split(' ').join('.')}` : '';
    const elementName = elem.tagName !== 'BODY' ? `${elem.tagName}:nth-child(${getElementPosition(elem)})${elemClass}` : elem.tagName;

    res = res === '' ? elementName : `${elementName}>${res}`;

    return getElementPart(parent, res);
}

const getElementPosition = (elem) => {
    let siblings = [];
    let sibling = elem.previousSibling;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling.tagName === elem.tagName) {
            siblings.push(sibling);
        }

        sibling = sibling.previousSibling;
    }

    return siblings.length + 1;
};

module.exports = getInfo;
