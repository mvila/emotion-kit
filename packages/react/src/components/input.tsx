import {useState, useCallback, forwardRef} from 'react';
import {jsx, useTheme} from '@emotion/react';
import {Input} from '@emotion-starter/react';

import {VisibilityIcon, VisibilityOffIcon} from './icons';

export type TextInputProps = Omit<Parameters<typeof Input>[0], 'onChange'> & {
  onChange?: (value: string) => void;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  {onChange, ...otherProps}: TextInputProps,
  ref
) {
  const change = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange]
  );

  return <Input ref={ref} onChange={change} {...otherProps} />;
});

export type PasswordInputProps = TextInputProps & {
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    {size = 'normal', className, inputClassName, inputStyle, ...otherProps}: PasswordInputProps,
    ref
  ) {
    const theme = useTheme();

    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    let xPadding;
    let iconSize;

    if (size === 'small') {
      xPadding = '.5rem';
      iconSize = 22;
    } else if (size === 'large') {
      xPadding = '1rem';
      iconSize = 28;
    } else {
      xPadding = '.75rem';
      iconSize = 28;
    }

    const Icon = !passwordIsVisible ? VisibilityIcon : VisibilityOffIcon;

    return (
      <div
        className={className}
        css={{display: 'flex', alignItems: 'center', position: 'relative'}}
      >
        <Icon
          onClick={() => {
            setPasswordIsVisible(!passwordIsVisible);
          }}
          size={iconSize}
          css={{
            'position': 'absolute',
            'right': `calc(${xPadding} - .15rem)`,
            'color': theme.colors.text.muted,
            'cursor': 'pointer',
            ':hover': {color: theme.colors.text.normal}
          }}
        />

        <TextInput
          ref={ref}
          size={size}
          {...otherProps}
          type={!passwordIsVisible ? 'password' : 'text'}
          className={inputClassName}
          style={inputStyle}
          css={{width: '100%', paddingRight: `calc(${iconSize}px + (${xPadding} - .15rem) * 2)`}}
        />
      </div>
    );
  }
);
