function values(object) {
    ans = [];
    for (let obj in object) {
        ans.push(object[obj]);
    }
    return ans;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let valuesArray = values(testObject);
console.log(valuesArray);

module.exports = values;