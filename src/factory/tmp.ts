type dataPerson = {
  firstName: string;
  lastName: string;
  age: number;
};

interface IMain {
  firstName: string;
  lastName: string;
  age: number;
  getDataPerson: () => dataPerson;
}

class Main implements IMain {
  firstName = "";
  lastName = "";
  age = 0;

  getDataPerson(): dataPerson {
    return {
      firstName: this.firstName.trim(),
      lastName: this.lastName.trim(),
      age: this.age,
    };
  }
}

class JohnDoe extends Main {
  constructor() {
    super();
    this.firstName = "John";
    this.lastName = "Doe";
    this.age = 24;
  }
}

class MaxMixx extends Main {
  constructor() {
    super();
    this.firstName = "Max";
    this.lastName = "Mix";
    this.age = 23;
  }
}
class MartinGreen extends Main {
  constructor() {
    super();
    this.firstName = "Martin";
    this.lastName = "Green";
    this.age = 34;
  }
}

class PersonFactory {
  static getPerson(name: string) {
    if (name === "John") {
      return new JohnDoe();
    } else if (name === "Max") {
      return new MaxMixx();
    } else return new MartinGreen();
  }
}

const PERSON = PersonFactory.getPerson("John");

console.log('PERSON: ', PERSON.getDataPerson());
