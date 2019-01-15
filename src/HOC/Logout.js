import React from 'react';

const Logout = () => {
  sessionStorage.clear();
  window.location.hash = '#/user/Login';
  return (
    <div />
  );
};

export default Logout;
