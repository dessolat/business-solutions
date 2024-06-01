import { Component } from 'react';

import Watch from './Watch';
import Logo from './Logo';
import Language from './Language';

export default class Header extends Component {
  render() {
    return (
      <header className='py-3 sticky top-0 bg-indigo-100'>
        <div className='container flex items-center justify-between'>
          <Logo />
					<Language />
          <Watch />
        </div>
      </header>
    );
  }
}
