const Intern = require('../lib/Intern');

//create an intern object
test('create an intern object', () => {
    const intern = new Intern('Claire', 1234, 'email@gmail.com','harvard');

    expect(intern.name).toBe('Claire');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email@gmail.com');
    expect(intern.school).toBe('harvard');

    const job = intern.getRole();
    const name = intern.getName();
    const email = intern.getEmail();

    expect(job).toBe('Intern');
    expect(name).toBe('Claire');
    expect(email).toBe('email@gmail.com');
});