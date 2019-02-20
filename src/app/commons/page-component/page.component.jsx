import React from 'react';
import {I18nProvider} from '@lingui/react';

import {LocalesService} from '../locales/locales';

export class PageComponent extends React.Component {
  constructor() {
    super();
    this.i18n = LocalesService.getLocales();
    console.log('i18n', this.i18n);
  }

  render() {
    console.log(this.i18n);
    return <I18nProvider i18n={this.i18n}>{this.props.children}</I18nProvider>;
  }
}