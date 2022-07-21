const Engineer = require('../lib/Engineer');

//test to create an engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Claire', 1, 'email', 'github');

    expect(engineer.name).toBe('Claire');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
})