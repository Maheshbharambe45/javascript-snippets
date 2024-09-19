/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let output=args.length;
    return output;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
