function defaults(object, defaultProps) {
    for (let obj in object) {
        if (object[obj] === undefined)
            object[obj] = defaultProps[obj];
    }
    return object;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', gender: undefined, marital: undefined };
const defaultProps = { gender: 'Male', marital: 'Married' };

let updatedObject = defaults(testObject, defaultProps);
console.log(updatedObject);

module.exports = defaults;