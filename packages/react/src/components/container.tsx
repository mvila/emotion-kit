import {jsx} from '@emotion/react';

export function Container({className, children}: {className?: string; children: React.ReactNode}) {
  return (
    <div className={className} css={{maxWidth: '1280px', margin: '0 auto', padding: '0 15px'}}>
      {children}
    </div>
  );
}
