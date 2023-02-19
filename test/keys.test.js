const keys = require("../keys");

test("Testing the keys function", () => {
    let object = { name: 'manish', salary: 99999999, company: 'mb' };
    expect(keys(object)).toStrictEqual(['name', 'salary', 'company']);
});
