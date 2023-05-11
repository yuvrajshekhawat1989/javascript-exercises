function getAge(person)
{
  if ((person.yearOfDeath === undefined)) {
    d = new Date();
    curr_year = d.getFullYear();
    return curr_year - person.yearOfBirth;
  } else {
    return person.yearOfDeath - person.yearOfBirth;
  }
}

const findTheOldest = function (people) {
  oldestPerson = people[0];
  for (let i = 0; i < people.length; i++) {
    if (getAge(oldestPerson) < getAge(people[i])) {
      oldestPerson = people[i];
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
