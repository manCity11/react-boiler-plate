import {setupI18n} from '@lingui/core';

export const LocalesService = {
  // default i18n used for unit testing, as i18n is not instanciated
  i18n: {
    _: () => {
      return;
    }
  },
  init({locales, language}) {
    let catalogs = {};
    catalogs[language] = {
      messages: locales
    };
    this.i18n = setupI18n({language, catalogs})
  },
  getLocales() {
    return this.i18n;
  }
};