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
  *::-webkit-scrollbar-track {
    background-color: #F5F5F5;
    border-radius: 10px;
  }
  *::-webkit-scrollbar {
    background-color: #F5F5F5;
    width: 10px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 10px;
  }
  .fade-in {
    animation: fadein 2s;
    -moz-animation: fadein 2s;
    -ms-animation: fadein 2s;
    -o-animation: fadein 2s;
    -webkit-animation: fadein 2s;  
  }
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @-o-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
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
