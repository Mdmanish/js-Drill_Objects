function keys(object) {
    ans = [];
    for (let obj in object) {
        ans.push(obj);
    }
    return ans;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let keysArray = keys(testObject);
console.log(keysArray);

module.exports = keys;
