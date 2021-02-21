const recomendation = {
    "list-1": [["a", "b"], ["a", "c"], ["d", "e"]],
    "list-2": [["a", "b"], ["a", "c"], ["d", "e"], ["e", "f"], ["a", "k"]],
    "list-3": [["x", "k"], ["a", "b"], ["a", "c"], ["d", "e"], ["e", "f"], ["a", "k"], ["d", "e"], ["d", "e"], ["a", "c"]],
}

const maxItemAssociation = (associationList) => filterArr(filterArr(associationList));

const filterArr = (arr) => {
    let newArr = [];

    arr.map(x => {
        if (newArr.length === 0) {
            newArr.push(x);
            return;
        }

        let isInclude = false;

        x.map(y => {
            newArr.map(z => {
                if (z.includes(y)) {
                    addUniqToArray(z, x);
                    isInclude = true;
                    return;
                }
            })
        });

        if (!isInclude) {
            newArr.push(x);
        }
    });

    return newArr.sort();
}

const addUniqToArray = (mainArr, iterableArr) => {
    iterableArr.map(x => !mainArr.includes(x) ? mainArr.push(x) : null);
}

console.log("list-1", maxItemAssociation(recomendation["list-1"]));
console.log("list-2", maxItemAssociation(recomendation["list-2"]));
console.log("list-3", maxItemAssociation(recomendation["list-3"]));
