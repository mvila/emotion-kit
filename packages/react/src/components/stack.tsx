import {jsx} from '@emotion/react';

export function Stack({
  direction = 'row',
  spacing = '1rem',
  className,
  children
}: {
  direction?: 'row' | 'column';
  spacing?: string | number;
  className?: string;
  children: React.ReactNode;
}) {
  const marginAttribute = direction === 'row' ? 'marginLeft' : 'marginTop';
  const negativeSpacing = typeof spacing === 'string' ? '-' + spacing : -spacing;

  return (
    <div
      className={className}
      css={{
        'display': 'flex',
        'flexDirection': direction,
        [marginAttribute]: negativeSpacing,
        '> *': {[marginAttribute]: spacing}
      }}
    >
      {children}
    </div>
  );
}
