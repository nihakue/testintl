import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import { connect } from 'react-redux';
import { BrokenContainer, NotBrokenContainer } from './Child';
import UpdateLocale from './UpdateLocale';
import logo from './logo.svg';
import './App.css';

addLocaleData(enLocaleData);
addLocaleData({
  locale: 'pi',
  parentLocale: 'en'
});

const messages = {
  en: {
    "notbroken.greeting": "I will rerender when the locale changes",
    "broken.greeting": "I won't rerender when the locale changes"
  },
  pi: {
    "notbroken.greeting": "I'll be rerenderin' when the locale changes",
    "broken.greeting": "I won't be rerenderin' when the locale changes"
  }
};

const App = ({ selectedLocale }) => (
  <IntlProvider locale={selectedLocale} messages={messages[selectedLocale]}>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <BrokenContainer />
      <NotBrokenContainer />
      <UpdateLocale />
    </div>
  </IntlProvider>
);

const AppContainer = connect( locale => ({ selectedLocale: locale }))(App);

export default AppContainer;
