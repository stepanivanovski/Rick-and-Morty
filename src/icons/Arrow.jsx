import React from 'react';

export const IconArrow = ({className=""}) => {
  return (
    <svg width="24" height="12" viewBox="0 0 16 12" fill="black" xmlns="http://www.w3.org/2000/svg">
      <path className={className} d="M1 6H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>c
      <path className={className} d="M6 1L1 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className={className} d="M6 11L1 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
