const defaults = require("../defaults");

test("Testing the defaults function", () => {
    let object = { name: 'manish', company: 'mb', marital: undefined };
    const defaultProps = { gender: 'Male', marital: 'Unmarried' };
    expect(defaults(object, defaultProps)).toStrictEqual({ name: 'manish', company: 'mb', marital: 'Unmarried' });
});
