import {useCallback} from 'react';
import {jsx} from '@emotion/react';
import {Input} from '@emotion-starter/react';

type InputProps = Omit<Parameters<typeof Input>[0], 'onChange'> & {
  onChange?: (value: string) => void;
};

export function TextInput({onChange, ...otherProps}: InputProps) {
  const change = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange]
  );

  return <Input onChange={change} {...otherProps} />;
}
