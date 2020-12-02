import ReactDOM from 'react-dom';
import {jsx} from '@emotion/react';
import {EmotionStarter} from '@emotion-starter/react';
import {EmotionKit} from '@emotion-kit/react';

import {Playground} from './playground';

const mode = window.localStorage.getItem('mode') === 'dark' ? 'dark' : 'light';

ReactDOM.render(
  <EmotionStarter mode={mode}>
    <EmotionKit>
      <Playground />
    </EmotionKit>
    ,
  </EmotionStarter>,
  document.getElementById('root')
);
