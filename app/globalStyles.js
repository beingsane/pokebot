import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  #app {
    min-height: 100%;
    min-width: 100%;
    padding: 12px;
  }
  .image.is-rounded img {
    border-radius: 6px;
  }
  .is-fullheight {
    height: 100vh;
  }
  .is-overflow-y {
    overflow-y: auto;
  }
`;
