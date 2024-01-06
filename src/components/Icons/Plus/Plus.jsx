import React from 'react';
import { Svg } from './Plus.styled';

export function Plus({ className }) {
  return (
    <Svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      // fill="currentColor"
    >
      <path
        d="M8 4V12M12 8H4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
