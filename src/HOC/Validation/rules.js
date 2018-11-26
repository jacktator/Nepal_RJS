const emptyRule = {
  discription: 'This can not be empty',
  regex: /[^\s+$]/,
};

// eslint-disable-next-line import/prefer-default-export
export const rules = {
  email: [emptyRule, {
    discription: 'Format error',
    regex: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
  }],
  password: [
    emptyRule,
    {
      discription: 'Password should be more than 8 characters and include at least more than one capital letter, number and special character',
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,}/,
    },
  ],
};
