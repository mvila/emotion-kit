import {jsx} from '@emotion/react';

import {Stack} from './stack';

export function ButtonBar({
  alignment = 'left',
  className,
  children
}: {
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  children: React.ReactNode;
}) {
  const justifyContent =
    alignment === 'center' ? 'center' : alignment === 'right' ? 'flex-end' : undefined;

  if (children === null || children === false) {
    return null;
  }

  return (
    <Stack className={className} css={{justifyContent, alignItems: 'center'}}>
      {children}
    </Stack>
  );
}
