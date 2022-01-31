import {jsx} from '@emotion/react';

// Source: https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Aclose%3A

export function CloseIcon({
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
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
}
