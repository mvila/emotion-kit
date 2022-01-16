import {useCallback} from 'react';
import {jsx} from '@emotion/react';

type FormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  onSubmit?: () => void;
};

export function Form({onSubmit, ...otherProps}: FormProps) {
  const submit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit?.();
    },
    [onSubmit]
  );

  return <form onSubmit={submit} {...otherProps} />;
}
