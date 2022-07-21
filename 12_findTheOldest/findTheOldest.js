const findTheOldest = function (people) {
  const d = new Date();
  let year = d.getFullYear();
  //let oldest = people[0];

  let oldestPerson = people.reduce((previousPerson, current) => {
    let oldest = previousPerson;
    let age = (current.yearOfDeath || year) - current.yearOfBirth;
    let oldestAge = (oldest.yearOfDeath || year) - oldest.yearOfBirth;
    if (age >= oldestAge) {
      oldest = current;
    }
    return oldest;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
