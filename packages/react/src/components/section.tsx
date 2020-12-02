import {jsx} from '@emotion/react';

export function Section({className, children}: {className?: string; children: React.ReactNode}) {
  return (
    <div className={className} css={{padding: '1rem 0'}}>
      {children}
    </div>
  );
}
