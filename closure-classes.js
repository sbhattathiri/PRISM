// classes
class UserClasses {
  constructor({ firstName, lastName, age, occupation }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
  }

  describeSelf() {
    console.log(
      `My name is ${this.firstName} ${this.lastName}, I am ${this.age}years     Old and i work as a ${this.occupation}`,
    );
  }

  getAge() {
    return this.age;
  }
}

const gbolahan = new UserClasses({
  firstName: 'Gbolahan',
  lastName: 'Olagunju',
  age: 28,
  occupation: 'Software Developer',
});

gbolahan.describeSelf();

// closure
const UserClosure = ({ firstName, lastName, age, occupation }) => {
  return {
    describeSelf: () => {
      console.log(
        `My name is ${firstName} ${lastName}, I am ${age}years Old and i work as a ${occupation}`,
      );
    },
    getAge: () => {
      return age;
    },
  };
};

const zainab = UserClosure({
  firstName: 'Zaynab',
  lastName: 'Olagunju',
  age: 30,
  occupation: 'Economist',
});

zainab.describeSelf();

uc = (function () {
  describeSelf = function (firstName, lastName, age, occupation) {
    console.log(
      `My name is ${firstName} ${lastName}, I am ${age}years Old and i work as a ${occupation}`,
    );
  };

  return { describe: describeSelf };
})();

uc.describe('Suraj', 'Vasudevan', 33, 'Software Engineer');
uc.describeSelf('Suraj', 'Vasudevan', 33, 'Software Engineer');
