// Please do not change the name of this function
const counterIntelligence = (str) => {
  const alphabetX = [
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W'
  ];

  const upperCaseArray = str.toUpperCase().split('');
  const lastChar = upperCaseArray[upperCaseArray.length - 1];
  let shift = 0;

  //loop to increment shift count from x to lastchar.
  for (let i = 1; i < alphabetX.length; i++) {
    shift += 1;
    if (alphabetX[i] === lastChar) break;
  }

  const decryptedArray = upperCaseArray.map((letter) => {
    let decryptedIndex = alphabetX.indexOf(letter) - shift;
    let regex = /([^a-z])/gi;
    if (letter.match(regex)) {
      return letter;
    } else if (decryptedIndex < 0) {
      const negativedecryptedIndex = shift - alphabetX.indexOf(letter);
      return alphabetX.at(-negativedecryptedIndex);
    } else {
      return alphabetX[decryptedIndex];
    }
  });

  return decryptedArray.join('');
};

module.exports = { counterIntelligence };
