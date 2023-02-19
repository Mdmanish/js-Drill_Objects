function invert(object) {
    let ans = {};
    for (let obj in object) {
        ans[object[obj]] = obj;
    }
    return ans;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let invertObject = invert(testObject);
console.log(invertObject);

module.exports = invert;
