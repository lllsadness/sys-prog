const _ = require('lodash');
const users = [
    { user: 'freddy', age: 20 },
    { user: 'bonny', age: 20 },
    { user: 'chika', age: 20 },
    { user: 'foxy', age: 21 }
  ];
  
  const sortedUsers = _.sortBy(users, 'age');
  console.log(sortedUsers);
  