import {setupI18n} from '@lingui/core';

export const LocalesService = {
  init({locales, language}) {
    const catalogs = {};
    catalogs[language] = {
      messages: locales
    };
    this.i18n = setupI18n({language, catalogs})
  },
  getLocales() {
    return this.i18n;
  }
};