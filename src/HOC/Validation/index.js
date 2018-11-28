import { errorType } from './Validation';
// eslint-disable-next-line import/prefer-default-export
export const validation = (type, content) => {
  const error = errorType[type];
  return error.check(content);
};
