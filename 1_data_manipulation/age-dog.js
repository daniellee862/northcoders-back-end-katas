const ageDog = (dog, num) => {
  const oldDog = { ...dog };

  if (Object.keys(dog).length > 0) {
    oldDog.age = oldDog.age += num;
  }

  return oldDog;
};

module.exports = ageDog;
