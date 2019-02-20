import React from 'react';
import ReactDOM from "react-dom";

import {App} from './App.jsx';
import {LocalesService} from './commons/locales/locales';
import axios from 'axios';

const initApp = (language = 'fr') => {
  axios
    .get(`dist/locales-${language}.json`)
    .then(({data}) => {
      LocalesService.init({language, locales: data});
      ReactDOM.render(<App/>, document.getElementById("root"));
    });
}

initApp();