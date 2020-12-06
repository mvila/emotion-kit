import {jsx, useTheme} from '@emotion/react';

import {Popover, PopoverProps} from './popover';
import {Menu, MenuItem} from './menu';
import {Box} from './box';

export function DropdownMenu({
  items = [],
  alignment = 'left',
  position = 'bottom',
  size = 'normal',
  className,
  children
}: {items?: MenuItem[]; size?: 'normal' | 'small'; className?: string} & Pick<
  PopoverProps,
  'alignment' | 'position' | 'children'
>) {
  const theme = useTheme();

  return (
    <Popover
      alignment={alignment}
      position={position}
      content={({close}: {close: () => void}) => (
        <Box
          css={{
            minWidth: '8rem',
            backgroundColor: theme.colors.background.normal,
            borderRadius: theme.radii[size]
          }}
        >
          <Menu items={items} onClick={close} size={size} />
        </Box>
      )}
      contentClassName={className}
    >
      {children}
    </Popover>
  );
}
