import React from 'react';

export const IconArrow = ({fill}) => {
  console.log(fill);
  return (
    <svg width="24" height="12" viewBox="0 0 16 12" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6H15" stroke="#0B1E2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 1L1 6" stroke="#0B1E2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 11L1 6" stroke="#0B1E2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
