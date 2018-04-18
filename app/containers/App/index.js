import React from 'react';

import Catcher from 'containers/Catcher';
import Log from 'containers/Log';

import Column from 'components/Bulma/Column';
import Columns from 'components/Bulma/Columns';

export default function App() {
  return (
    <Columns>
      <Column customClass="is-sidebar" span="3">
        <Catcher />
      </Column>
      <Log />
    </Columns>
  );
}
