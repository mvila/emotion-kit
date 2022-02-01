import {jsx} from '@emotion/react';

// Source: https://material.io/tools/icons

export function DeleteIcon({
  size = 32,
  color = 'currentColor',
  onClick,
  className
}: {
  size?: number;
  color?: string;
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
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  );
}
