import React from 'react';

const Logout = () => {
  sessionStorage.clear();
  window.location.hash = '#/';
  window.location.reload(true);
  return (
    <div />
  );
};

export default Logout;
