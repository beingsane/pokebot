import React from 'react';
import { ToastContainer } from 'react-toastify';

import Auth from 'containers/Auth';
import Catcher from 'containers/Catcher';
import Log from 'containers/Log';
import Spammer from 'containers/Spammer';

import Column from 'components/Bulma/Column';
import Columns from 'components/Bulma/Columns';

export default function App() {
  return (
    <Columns>
      <Column customClass="is-sidebar" span="3">
        <Spammer />
        <br />
        <Catcher />
      </Column>
      <Log />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable={false}
        pauseOnHover
      />
      <Auth />
    </Columns>
  );
}
