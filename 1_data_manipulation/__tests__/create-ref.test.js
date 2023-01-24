const createRef = require('../create-ref.js');

const people = [
  { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
  {
    name: 'ant',
    phoneNumber: '01612223344',
    address: 'Northcoders, Manchester'
  },
  { name: 'mitch', phoneNumber: '07777777777', address: null }
];

describe('createRef()', () => {
  test('RETURNS EMPTY OBJECT WHEN PASSED EMPTY ARRAY', () => {
    expect(createRef([])).toEqual({});
  });

  test('TEST RETURNED OBJECT CONTAINS CORRECT KEYS', () => {
    const phoneBook = createRef(people);
    const phoneBookKeys = Object.keys(phoneBook);
    expect(phoneBookKeys).toEqual(['vel', 'ant', 'mitch']);
  });

  test('TEST RETURNED OBJECT CONTAINS CORRECT Values', () => {
    const phoneBook = createRef(people);
    const phoneBookValues = Object.values(phoneBook);
    expect(phoneBookValues).toEqual([
      '01134445566',
      '01612223344',
      '07777777777'
    ]);
  });

  test('TEST INPUT ARRAY HAS NOT BEEN MUTATED', () => {
    createRef(people);
    expect(people).toEqual([
      {
        name: 'vel',
        phoneNumber: '01134445566',
        address: 'Northcoders, Leeds'
      },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ]);
  });

  test('TEST RETURNED OBJECT CONTAINS CORRECT ENTRIES WHEN PASSED NAME AND DETAILS ARGS', () => {
    const refPhoneNumber = createRef(people, 'name', 'phoneNumber');
    const refAddress = createRef(people, 'name', 'address');
    const phoneBookValues = Object.values(refPhoneNumber);
    const addressBookValues = Object.values(refAddress);
    expect(phoneBookValues).toEqual([
      '01134445566',
      '01612223344',
      '07777777777'
    ]);
    expect(addressBookValues).toEqual([
      'Northcoders, Leeds',
      'Northcoders, Manchester',
      null
    ]);
  });

  //
});
