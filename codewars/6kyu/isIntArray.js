function isIntegerArray(arr) {
    return Array.isArray(arr) && arr.every(x => Number.isSafeInteger(x));
}