const ageDog = require('../age-dog.js');

describe('ageDog', () => {
  test('RETURNS EMPTY OBJECT WHEN PASSED EMPTY OBJECT TO DOG PARAM', () => {
    expect(ageDog({})).toEqual({});
  });

  test('TEST RETURNED OBJECT CONTAINS CORRECT KEYS', () => {
    const oldDogKeys = Object.keys(ageDog({ name: 'Otis', age: 1 }, 0));
    expect(oldDogKeys).toEqual(['name', 'age']);
  });

  test('TEST RETURNED OBJECT CONTAINS CORRECT VALUES', () => {
    const oldDogValues = Object.values(ageDog({ name: 'Otis', age: 1 }, 0));
    expect(oldDogValues).toEqual(['Otis', 1]);
  });

  test('TEST INPUT OBJECT HAS NOT BEEN MUTATED', () => {
    const dog = { name: 'Otis', age: 1 };
    ageDog(dog, 1);
    expect(dog).toEqual(dog);
  });

  test('TEST INPUT OBJECT IS NOT SAME AS RETURNED OBJ', () => {
    const dog = { name: 'Otis', age: 1 };
    expect(ageDog(dog, 1)).not.toBe(dog);
  });
  //
});
