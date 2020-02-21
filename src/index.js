// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    if (matrix.length == 0) return [];
    let lineMatr = [],
        reverse = false;
    matrix.forEach(element => {
        if (Array.isArray(element)) {
            if (!reverse) {
                reverse = true;
            } else {
                element.reverse();
                reverse = false;
            }
            element.forEach(e => lineMatr.push(e));
        } else lineMatr.push(element);
    });
    return lineMatr;
};
