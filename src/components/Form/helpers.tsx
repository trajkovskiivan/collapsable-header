interface valuesInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age: string;
}
interface errorsInterface {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  age?: string;
}

export const FORM = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  age: '',
};

export function validateInfo(values: valuesInterface) {
  const {firstName, lastName, phoneNumber, email, age} = values;

  let errors: errorsInterface = {};

  if (!firstName) {
    errors.firstName = "Can't be empty!";
  }
  if (!lastName) {
    errors.lastName = "Can't be empty!";
  }
  if (!phoneNumber) {
    errors.phoneNumber = "Can't be empty!";
  }
  if (!email) {
    errors.email = "Can't be empty!";
  }
  if (!age) {
    errors.age = "Can't be empty!";
  }

  return errors;
}
