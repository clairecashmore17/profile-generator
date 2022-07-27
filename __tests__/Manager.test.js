const Manager = require('../lib/Manager');

//create an Manager object
test('create an Manager object', () => {
    const manager = new Manager('Claire', 1234, 'email@gmail.com', 234);

    expect(manager.name).toBe('Claire');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@gmail.com');
    expect(manager.office).toEqual(expect.any(Number));

    const job = manager.getRole();
    const name = manager.getName();
    const email = manager.getEmail();

    expect(job).toBe('Manager');
    expect(name).toBe('Claire');
    expect(email).toBe('email@gmail.com');
});