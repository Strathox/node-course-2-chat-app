const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new User();
    users.users = [{
      id: '1',
      name: 'Geoffrey',
      room: 'React.js'
    }, {
      id: '2',
      name: 'Greg',
      room: 'Node.js'
    }, {
      id: '3',
      name: 'Godfrey',
      room: 'Node.js'
    }];
  });

  it('Should add new user', () => {
    var Users = new Users();
    var user = {
      id: '123',
      name: 'Geoffrey',
      room: 'Node.js'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect((users.users). toEqual([user]));
  });

  it('Should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('Should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe('3')
  });

  it('Should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);
  });

  it('Should return names for node course', () => {
    var userList = users.getUserList('Node.js');

    expect(userList).toEqual(['Godfrey', 'Greg']);
  });

  it('Should return names for react course', () => {
    var userList = users.getUserList('React.js');

    expect(userList).toEqual(['Geoffrey']);
  });
});
