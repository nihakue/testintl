import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    otherLocale: state === 'en' ? 'pi' : 'en',
  };
}

const mapDispatchToProps = {
  updateLocale: locale => ({ type: 'SET_LOCALE', locale }),
};

const ChangeLocale = ({ otherLocale, updateLocale }) => (
  <button onClick={() => updateLocale(otherLocale)}>
    {`Change Locale to ${otherLocale}`}
  </button>
);

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLocale);
