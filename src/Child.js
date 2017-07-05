import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';


const Broken = () =>
  <h1>
    <FormattedMessage id='broken.greeting' />
  </h1>;

const NotBroken = () =>
  <h1>
    <FormattedMessage id='notbroken.greeting' />
  </h1>

export const BrokenContainer = connect(() => ({}))(Broken);
export const NotBrokenContainer = injectIntl(connect(() => ({}))(NotBroken));
