import React from 'react';

import Log from 'containers/Log';

import Columns from 'components/Bulma/Columns';
import Container from 'components/Bulma/Container';

export default function App() {
  return (
    <Container>
      <Columns>
        <Log />
      </Columns>
    </Container>
  );
}
