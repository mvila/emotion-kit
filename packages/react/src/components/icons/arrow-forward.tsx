import {jsx} from '@emotion/react';

// Source: https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Aarrow_forward_ios%3A

export function ArrowForwardIcon({
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
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
      </g>
    </svg>
  );
}
