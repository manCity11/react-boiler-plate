import React from 'react';
import PropTypes from 'prop-types';
import {I18nProvider} from '@lingui/react';

import {LocalesService} from '../locales/locales';

export class PageComponent extends React.Component {
  constructor() {
    super();
    this.i18n = LocalesService.getLocales();
  }

  render() {
    return <I18nProvider i18n={this.i18n}>{this.props.children}</I18nProvider>;
  }
}

PageComponent.propTypes = {
  children: PropTypes.object
};
