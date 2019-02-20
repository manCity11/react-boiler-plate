import React from 'react';
import ReactDOM from "react-dom";
import {I18nProvider} from '@lingui/react';

import {LocalesService} from './commons/locales/locales';
import axios from 'axios';

import {App} from './App.jsx';

const initApp = (language = 'fr') => {
  axios
    .get(`dist/locales-${language}.json`)
    .then(({data}) => {
      LocalesService.init({language, locales: data});
      const i18n = LocalesService.getLocales();
      ReactDOM.render(<I18nProvider i18n={i18n}>
        <App/>
      </I18nProvider>, document.getElementById("root"));
    });
}

initApp();