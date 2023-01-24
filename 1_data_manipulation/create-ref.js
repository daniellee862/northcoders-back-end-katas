const createRef = (people, name, details) => {
  const entries = details
    ? people.map((person) => {
        return [person[name], person[details]];
      })
    : people.map((person) => {
        return [person.name, person.phoneNumber];
      });

  const refObject = Object.fromEntries(entries);

  return refObject;
};

module.exports = createRef;
