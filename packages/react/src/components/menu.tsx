import {jsx, useTheme} from '@emotion/react';
import compact from 'lodash/compact';

export type MenuItem =
  | {
      type?: 'item' | 'divider';
      label?: React.ReactNode;
      onClick?: (event: React.MouseEvent) => void;
      disabled?: boolean;
    }
  | undefined
  | false;

export function Menu({
  items = [],
  onClick: menuOnClick,
  size = 'normal'
}: {
  items?: MenuItem[];
  onClick?: (event: React.MouseEvent) => void;
  size?: 'normal' | 'small';
}) {
  return (
    <div css={{padding: size !== 'small' ? '.5rem 0' : '.3rem 0', userSelect: 'none'}}>
      {compact(items).map(
        ({type = 'item', label, onClick: itemOnClick, disabled = false}, index) => {
          if (disabled) {
            itemOnClick = undefined;
          }

          if (type === 'divider') {
            return <MenuDividerComponent key={index} size={size} />;
          }

          let handleClick: ((event: React.MouseEvent) => void) | undefined;

          if (itemOnClick !== undefined) {
            handleClick = (event) => {
              if (menuOnClick !== undefined) {
                menuOnClick(event);
              }

              if (itemOnClick !== undefined) {
                itemOnClick(event);
              }
            };
          }

          return (
            <MenuItemComponent key={index} onClick={handleClick} size={size} disabled={disabled}>
              {typeof label === 'function' ? label() : label}
            </MenuItemComponent>
          );
        }
      )}
    </div>
  );
}

function MenuItemComponent({
  onClick,
  size = 'normal',
  disabled = false,
  children
}: {
  onClick?: (event: React.MouseEvent) => void;
  size?: 'normal' | 'small';
  disabled?: boolean;
  children?: React.ReactNode;
}) {
  const theme = useTheme();

  let css: any = {
    padding: size !== 'small' ? '.4rem 1rem' : '.3rem .7rem',
    fontSize: size !== 'small' ? theme.fontSizes.normal : theme.fontSizes.small,
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };

  if (onClick !== undefined) {
    css = {
      ...css,
      'cursor': 'pointer',
      ':hover': {backgroundColor: theme.colors.background.moreHighlighted}
    };
  } else if (disabled) {
    css = {...css, cursor: 'not-allowed', opacity: 0.5};
  }

  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClick?.(event);
      }}
      css={css}
    >
      {children}
    </div>
  );
}

function MenuDividerComponent({size = 'normal'}: {size?: 'normal' | 'small'}) {
  const theme = useTheme();

  return (
    <div
      css={{
        margin: size !== 'small' ? '.4rem 0' : '.3rem 0',
        borderTop: `1px solid ${theme.colors.border.normal}`
      }}
    />
  );
}
