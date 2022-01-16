import {jsx} from '@emotion/react';

export function Control({className, children}: {className?: string; children: React.ReactNode}) {
  return (
    <div className={className} css={{display: 'flex', flexDirection: 'column'}}>
      {children}
    </div>
  );
}
