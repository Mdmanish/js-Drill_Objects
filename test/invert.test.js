const invert = require("../invert");

test("Testing the invert function", () => {
    let object = { name: 'manish', salary: 99999999, company: 'mb' };
    expect(invert(object)).toStrictEqual({ 'manish': 'name', 99999999: 'salary', 'mb': 'company' });
});
