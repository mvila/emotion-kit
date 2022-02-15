import {Fragment} from 'react';
import {jsx} from '@emotion/react';

// Source: https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Ainfo%3A

export function InfoIcon({
  size = 32,
  color = 'currentColor',
  outline = false,
  onClick,
  className
}: {
  size?: number;
  color?: string;
  outline?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}) {
  return (
    <svg
      onClick={onClick}
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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </>
      )}
      {outline && (
        <>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </>
      )}
    </svg>
  );
}
