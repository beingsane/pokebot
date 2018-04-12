import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Log from 'containers/Log';

export default function App() {
  return (
    <div>
      <Switch>
        <Route component={Log} />
      </Switch>
    </div>
  );
}
