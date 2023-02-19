const values = require("../values");

test("Testing the values function", () => {
    let object = { name: 'manish', salary: 99999999, company: 'mb' };
    expect(values(object)).toStrictEqual(['manish', 99999999, 'mb']);
});
