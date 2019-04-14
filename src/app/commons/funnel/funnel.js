import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "@lingui/react";
import axios from "axios";

import { LocalesService } from "../locales/locales";

export const defaultTemplate = ({ language = "fr" } = {}) => Component => {
  const setComponent = (MainTemplate, i18n) => {
    ReactDOM.render(
      <I18nProvider i18n={i18n}>
        <BrowserRouter>
          <MainTemplate />
        </BrowserRouter>
      </I18nProvider>,
      document.getElementById("root")
    );
  };

  axios.get(`dist/locales-${language}.json`).then(({ data }) => {
    LocalesService.init({ language, locales: data });
    const i18n = LocalesService.getLocales();

    setComponent(Component, i18n);
  });
};
