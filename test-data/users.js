/*const users = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    type: 'positive',
    expectedResult: 'success'
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    type: 'negative',
    expectedResult: 'locked'
  }
];

module.exports = users;*/


// Login test data
const users = {
  positive: {
    username: 'standard_user',
    password: 'secret_sauce'
  },

  negative: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  }
};


// Reusable function
// Test ko jis type ka user chahiye,
// ye function wahi user return karega.
function getLoginUser(type) {
  return users[type];
}


// Export function so multiple test files can reuse it
module.exports = {
  getLoginUser
};