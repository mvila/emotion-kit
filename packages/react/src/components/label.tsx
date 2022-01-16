import {jsx, useTheme} from '@emotion/react';

export function Label({
  size = 'normal',
  ...otherProps
}: React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: 'normal' | 'small' | 'large';
}) {
  const theme = useTheme();

  let marginBottom: string;
  let fontSize: string;

  if (size === 'small') {
    marginBottom = '.25rem';
    fontSize = theme.fontSizes.small;
  } else if (size === 'large') {
    marginBottom = '.5rem';
    fontSize = theme.fontSizes.normal;
  } else {
    marginBottom = '.5rem';
    fontSize = theme.fontSizes.normal;
  }

  return (
    <label
      {...otherProps}
      css={{
        marginBottom,
        fontSize,
        lineHeight: theme.lineHeights.small,
        color: theme.colors.text.muted
      }}
    />
  );
}
