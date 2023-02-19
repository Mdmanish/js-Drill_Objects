const pairs = require("../pairs");

test("Testing the pairs function", () => {
    let object = { name: 'manish', salary: 99999999, company: 'mb' };
    expect(pairs(object)).toStrictEqual([['name', 'manish'], ['salary', 99999999], ['company', 'mb']]);
});
