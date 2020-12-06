import {useCallback} from 'react';
import {jsx, useTheme} from '@emotion/react';
import {Button} from '@emotion-starter/react';
import {Badge, DropdownMenu, Popover, Box} from '@emotion-kit/react';

export function Playground() {
  const theme = useTheme();

  const mode = window.localStorage.getItem('mode') || 'light';

  const setMode = useCallback((mode: string) => {
    window.localStorage.setItem('mode', mode);
  }, []);

  const sectionStyle = {marginTop: 0};

  return (
    <div style={{maxWidth: '700px', margin: '40px auto'}}>
      <h2>Emotion Kit Playground</h2>

      <div css={{marginBottom: '3rem'}}>
        <a
          href="/"
          onClick={() => {
            setMode('light');
          }}
          css={
            mode === 'light'
              ? {color: theme.colors.text.normal, fontWeight: theme.fontWeights.bold}
              : undefined
          }
        >
          Light mode
        </a>
        <span css={{padding: '0 .75rem', color: theme.colors.border.normal}}>|</span>
        <a
          href="/"
          onClick={() => {
            setMode('dark');
          }}
          css={
            mode === 'dark'
              ? {color: theme.colors.text.normal, fontWeight: theme.fontWeights.bold}
              : undefined
          }
        >
          Dark mode
        </a>
      </div>

      <h3 css={sectionStyle}>Badge</h3>

      <h4>Regular</h4>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Badge>Neutral</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="primary">Primary</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="secondary">Secondary</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="positive">Positive</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="negative">Negative</Badge>
        </div>
      </div>

      <h4>Outline</h4>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Badge variant="outline">Neutral</Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="primary" variant="outline">
            Primary
          </Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="secondary" variant="outline">
            Secondary
          </Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="positive" variant="outline">
            Positive
          </Badge>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Badge color="negative" variant="outline">
            Negative
          </Badge>
        </div>
      </div>

      <hr />

      <h3 css={sectionStyle}>DropdownMenu</h3>

      <DropdownMenu
        items={[
          {
            label: 'Edit',
            onClick: () => {
              alert('"Edit" clicked!');
            }
          },
          {label: 'Duplicate'},
          {
            label: 'Remove',
            disabled: true
          },
          {type: 'divider'},
          {label: () => <strong>Preview</strong>}
        ]}
      >
        {({open}) => (
          <Button onClick={open} color="primary">
            Open
          </Button>
        )}
      </DropdownMenu>

      <hr />

      <h3 css={sectionStyle}>Popover</h3>

      <Popover
        alignment="left" // 'left' | 'right'
        position="bottom" // 'bottom' | 'top' | 'cursor'
        content={
          <Box
            css={{
              width: 200,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.background.highlighted
            }}
          >
            Content
          </Box>
        }
      >
        {({open}) => (
          <Button onClick={open} color="primary">
            Open
          </Button>
        )}
      </Popover>
    </div>
  );
}
