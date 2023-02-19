function mapObject(object, cb) {

    for (let obj in object) {
        object[obj] = cb(object[obj], obj);
    }
    return object;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let updatedMap = mapObject(testObject, (value, key) => {
    return value + " changed";
});

console.log(updatedMap);
module.exports = mapObject;
