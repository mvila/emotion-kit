import {jsx, useTheme} from '@emotion/react';

export function Box(props: React.HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme();

  return (
    <div
      {...props}
      css={{border: `1px solid ${theme.colors.border.normal}`, borderRadius: theme.radii.normal}}
    />
  );
}
