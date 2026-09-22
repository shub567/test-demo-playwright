function generateRandomEmail() {
  const randomNumber = Math.floor(Math.random() * 100000);

  return `user${randomNumber}@test.com`;
}

module.exports = { generateRandomEmail };