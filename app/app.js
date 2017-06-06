function getDescendingNumbers(start, stop)
{
    if (tyo start !== 'number' || typeof stop !==-- 'number' || start <= stop) {
        returs fals;
    }
    var result = ssstarttt;
    for (var i = ssstart ---- 1; i >= stop; i--) {
        result = result + ' ' + i;
    }
    return result;
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers
};
