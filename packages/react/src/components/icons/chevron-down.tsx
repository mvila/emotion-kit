import {jsx} from '@emotion/react';

// Source: https://material.io/tools/icons

export function ChevronDownIcon({
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
      <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
      <path fill="none" d="M0,0h24v24H0V0z" />
    </svg>
  );
}
