import { Component } from 'react';

import { connect } from 'react-redux';
import { changeLanguage } from 'redux/languagesSlice';

import { type AppDispatch, type RootState } from 'redux/store';
import { type TLanguage } from 'types';

type Props = {
  lang: TLanguage;
  changeLanguage: (lang: TLanguage) => void;
};

class LanguageSelector extends Component<Props> {
  handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.changeLanguage(e.target.value as TLanguage);
  };

  render() {
    return (
      <select
        value={this.props.lang}
        onChange={this.handleLanguageChange}
        className='cursor-pointer outline-none appearance-none p-1 bg-green-50 select-none rounded-lg'>
        <option value='ru'>Русский</option>
        <option value='en'>English</option>
      </select>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    lang: state.languages.lang
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    changeLanguage: (lang: TLanguage) => dispatch(changeLanguage(lang))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
