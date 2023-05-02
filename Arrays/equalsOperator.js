function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    }

    if (typeof value1 !== "object" || value1 === null ||
        typeof value2 !== "object" || value2 === null) {
        return false;
    }

    const keysA = Object.keys(value1);
    const keysB = Object.keys(value2);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }

    return true;
}
