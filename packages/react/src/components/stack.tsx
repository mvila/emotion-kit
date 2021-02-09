import {jsx} from '@emotion/react';

export function Stack({
  direction = 'row',
  wrap = false,
  spacing = '1rem',
  className,
  children
}: {
  direction?: 'row' | 'column';
  wrap?: boolean;
  spacing?: string | number;
  className?: string;
  children: React.ReactNode;
}) {
  const negativeSpacing = typeof spacing === 'string' ? '-' + spacing : -spacing;

  if (!wrap) {
    const marginAttribute = direction === 'row' ? 'marginLeft' : 'marginTop';

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
  } else {
    return (
      <div
        className={className}
        css={{
          'display': 'flex',
          'flexWrap': 'wrap',
          'flexDirection': direction,
          'marginTop': negativeSpacing,
          'marginLeft': negativeSpacing,
          '> *': {marginTop: spacing, marginLeft: spacing}
        }}
      >
        {children}
      </div>
    );
  }
}
