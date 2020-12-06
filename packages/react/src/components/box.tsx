import {jsx, useTheme} from '@emotion/react';

export function Box({className, children}: {className?: string; children: React.ReactNode}) {
  const theme = useTheme();

  return (
    <div
      className={className}
      css={{border: `1px solid ${theme.colors.border.normal}`, borderRadius: theme.radii.normal}}
    >
      {children}
    </div>
  );
}
