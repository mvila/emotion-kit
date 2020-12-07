import {useState} from 'react';
import {jsx, useTheme} from '@emotion/react';
import {Input} from '@emotion-starter/react';
import {useCombobox} from 'downshift';

export function ComboBox({
  items = [],
  initialValue,
  onValueChange,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  items?: string[];
  initialValue?: string;
  onValueChange?: (value: string) => void;
}) {
  const [inputItems, setInputItems] = useState(items);

  const theme = useTheme();

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: inputItems,
    initialInputValue: initialValue,
    onInputValueChange: ({inputValue}) => {
      if (onValueChange != undefined && inputValue != undefined) {
        onValueChange(inputValue);
      }

      setInputItems(
        items.filter(
          (item) =>
            inputValue !== undefined && item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    }
  });

  // TODO: Reimplement with the Downshift component so we can get rid of the div
  // that is wrapping the Input component

  return (
    <div>
      <div {...getComboboxProps()}>
        <Input {...props} {...getInputProps()} />
      </div>
      <ul
        css={{
          display: 'block',
          position: 'relative',
          margin: 0,
          padding: 0,
          listStyle: 'none',
          lineHeight: 0
        }}
        {...getMenuProps()}
      >
        {isOpen && (
          <div
            css={{
              display: inputItems.length > 0 ? 'block' : 'none',
              position: 'absolute',
              maxWidth: 300,
              maxHeight: 102,
              overflowY: 'scroll',
              top: '.5rem',
              left: 0,
              padding: '.5rem 0',
              listStyle: 'none',
              backgroundColor: theme.colors.background.normal,
              border: `1px solid ${theme.colors.border.normal}`,
              borderRadius: theme.radii.normal,
              zIndex: 20000
            }}
          >
            {inputItems.map((item, index) => (
              <li
                key={`${item}${index}`}
                css={{
                  margin: 0,
                  padding: '.4rem 1rem',
                  fontSize: theme.fontSizes.normal,
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                  backgroundColor:
                    index === highlightedIndex
                      ? theme.colors.background.moreHighlighted
                      : undefined,
                  cursor: 'pointer'
                }}
                {...getItemProps({item, index})}
              >
                {item}
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}
