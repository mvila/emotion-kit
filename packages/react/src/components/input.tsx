import {useCallback, forwardRef} from 'react';
import {jsx} from '@emotion/react';
import {Input} from '@emotion-starter/react';

type InputProps = Omit<Parameters<typeof Input>[0], 'onChange'> & {
  onChange?: (value: string) => void;
};

export const TextInput = forwardRef<HTMLInputElement, InputProps>(function TextInput(
  {onChange, ...otherProps}: InputProps,
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
