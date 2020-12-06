import {jsx} from '@emotion/react';

// Source: https://material.io/tools/icons/?icon=account_circle

export function StarIcon({
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
        <g>
          <rect fill="none" height="24" width="24" x="0" />
          <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
        </g>
      )}
      {outline && (
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
      )}
    </svg>
  );
}
