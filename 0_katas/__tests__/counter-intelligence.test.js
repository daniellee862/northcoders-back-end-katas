const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  test('RETURN VALUE IS OF STRING TYPE ', () => {
    expect(typeof counterIntelligence('A')).toBe('string');
  });

  test('IF INPUT STRING IS ONE CHARACTER IN LENGTH, RETURN X', () => {
    expect(counterIntelligence('S')).toBe('X');
  });

  test('RETURN DECODED INPUT STRING WITH SPACES INTACT', () => {
    expect(counterIntelligence('BCDT Y')).toBe('ABCS X');
  });

  test('RETURN DECODED LOWERCASE', () => {
    expect(counterIntelligence('hij y')).toBe('GHI X');
  });

  test('TEST LONGER DECODED INPUT ', () => {
    expect(counterIntelligence('NKRRU YCKKZNKGXZ D')).toBe(
      'HELLO SWEETHEART X'
    );
  });

  test('RETURN DECODED INPUT STRING WITH SPACES INTACT', () => {
    expect(
      counterIntelligence(
        'ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G'
      )
    ).toBe(
      'REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X'
    );
  });
});
