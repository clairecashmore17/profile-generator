const Manager = require('../lib/Manager');

//create an Manager object
test('create an Manager object', () => {
    const manager = new Manager('Claire', 1234, 'email@gmail.com');

    expect(manager.name).toBe('Claire');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@gmail.com');
});