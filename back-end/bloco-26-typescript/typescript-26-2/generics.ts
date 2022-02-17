type callbackFilter<Type> = (value: Type, index?: number, array?: Array<Type>) => boolean;

function myFilter<Type>(array: Array<Type>, callback: callbackFilter<Type>): Array<Type> {
    const newArray: Array<Type> = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(myFilter([1, 2, 3], (item) => {
    return item < 3
}));

console.log(myFilter(["a", "b", "c"], (item) => {
    return item !== "a"
}));