import {jsx} from '@emotion/react';

// Source: https://material.io/tools/icons

export function ChevronLeftIcon({
  size = 32,
  color = 'currentColor',
  className
}: {
  size?: number;
  color?: string;
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
      <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </svg>
  );
}
