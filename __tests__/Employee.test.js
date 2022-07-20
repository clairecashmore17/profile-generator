const Employee = require('../lib/Employee');

//first test
test('creates an employee object', () => {
    const employee = new Employee('Claire', 1234, 'email@gmail.com');

    expect(employee.name).toBe('Claire');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email@gmail.com');
})