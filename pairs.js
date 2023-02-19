function pairs(object) {
    ans = [];
    for (let obj in object) {
        ans.push([obj, object[obj]]);
    }
    return ans;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let pairOfObject = pairs(testObject);
console.log(pairOfObject);

module.exports = pairs;
