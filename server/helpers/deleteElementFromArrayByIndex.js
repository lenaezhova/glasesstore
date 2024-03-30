const deleteElementFromArrayByIndex = (array, index) => {
    return array.reduce((acc, el, i) => {
        if (i !== index) acc.push(el);
        return acc;
    }, [])
}

module.exports = deleteElementFromArrayByIndex;