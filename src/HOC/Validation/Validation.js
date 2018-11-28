import { rules } from './rules';

function ErrorType(id, name, rule) {
  this.id = id || '';
  this.name = name || '';
  this.rules = rule || [];
}

// eslint-disable-next-line func-names
ErrorType.prototype.check = function (input) {
  let error = false;
  let resDiscription = 'This can not be empty';
  this.rules.find(
    (v) => {
      const { regex, discription } = v;
      error = regex.test(input);
      if (!error) {
        resDiscription = discription;
        return { error, resDiscription };
      }
      return { error, resDiscription };
    },
  );
};

const EmailValidation = new ErrorType(1, 'email', rules.email);
const PasswordValidation = new ErrorType(2, 'password', rules.password);
const RePasswordValidation = new ErrorType(3, 'rePassword', rules.password);

// eslint-disable-next-line import/prefer-default-export
export const errorType = {
  email: EmailValidation,
  password: PasswordValidation,
  rePassword: RePasswordValidation,
};
