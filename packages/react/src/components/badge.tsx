import {jsx, useTheme} from '@emotion/react';
import {ColorName} from '@emotion-starter/react';

export function Badge({
  color = 'neutral',
  variant = 'normal',
  className,
  children
}: {
  color?: ColorName;
  variant?: 'normal' | 'outline';
  className?: string;
  children: React.ReactNode;
}) {
  const theme = useTheme();

  let textColor;
  let backgroundColor;
  let borderColor;

  if (variant === 'outline') {
    textColor = theme.colors[color].normal;
    backgroundColor = 'transparent';
    borderColor = textColor;
  } else {
    textColor = theme.colors[color].textOnNormal;
    backgroundColor = theme.colors[color].normal;
    borderColor = backgroundColor;
  }

  let css: any = {
    display: 'inline-block',
    padding: '.25rem .4rem .3rem .4rem',
    color: textColor,
    backgroundColor,
    fontSize: '.7rem',
    fontWeight: 600,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
    lineHeight: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor,
    borderRadius: '.25rem'
  };

  return (
    <div className={className} css={css}>
      {children}
    </div>
  );
}
