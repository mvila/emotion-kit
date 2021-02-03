import {Fragment} from 'react';
import {jsx} from '@emotion/react';

// Source: https://material.io/tools/icons/?icon=account_circle

export function FlagIcon({
  size = 32,
  color = 'currentColor',
  outline = false,
  className
}: {
  size?: number;
  color?: string;
  outline?: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      className={className}
    >
      {!outline && (
        <>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
        </>
      )}
      {outline && (
        <>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z" />
        </>
      )}
    </svg>
  );
}
