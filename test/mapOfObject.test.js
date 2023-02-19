const mapObject = require("../mapObject");

test("Testing the mapObject function", () => {
    let object = { name: 'manish', salary: 99999999, company: 'mb' };
    let updatedMap = mapObject(object, (value, key) => {
        return value + 2;
    });

    expect(updatedMap).toStrictEqual({ name: 'manish2', salary: 100000001, company: 'mb2' });
});
