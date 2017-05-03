import React from 'react';
import ReactDOM from 'react-dom';

const menu = [
  {
    name: 'Блог',
    id: 'blog',
    url: '#'
  },
  {
    name: 'Контакты',
    id: 'contacts',
    url: '#'
  },
  {
    name: 'Портфолио',
    id: 'portfolio',
    url: 'http://shining-present.tw1.ru'
  },
  {
    name: 'Обо мне',
    id: 'about',
    url: '#'
  },
  {
    name: 'Архив',
    id: 'archive',
    url: '#'
  }
]

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        blog: true,
        contacts: false,
        portfolio: false,
        about: false,
        archive: false,
        isOpen: false
    };
    
    this.toggleMenu = this.toggleMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }
  
  toggleMenu(e) {
    this.setState({
      blog: false,
      contacts: false,
      portfolio: false,
      about: false,
      archive: false
    });
    
    let $target = $(e.target),
        val = $target.attr('value');

    this.state[val] = true;
    $('.navItem').removeClass('active');

    $target
      .parent()[0]
      .className += ' active';
  }
  
  openMenu() {
    let $navList = $('#navList');
    
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
      $navList.show('fast');
    } else {
      this.setState({isOpen: false});
      $navList.hide('fast');
    }
  }
   
  render() {
    const navItems = menu.map((a) => {
      return <NavItem
        name={a.name}
        key={a.id}
        id={a.id}
        url={a.url}
        onClick={this.toggleMenu} />;
    });
    
    console.log(this.state);
    return (
      <nav className='navigaton'>
        <button id='openMenuButton'
          className='navigation__openMenuButton visible-xs'
          onClick={this.openMenu}>
          <span className='sr-only'> 
            Toggle navigation
          </span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <ul className='navList'
            id='navList'>
          {navItems}
        </ul>
      </nav>
    );
  }
}

class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const name = this.props.name,
          id = this.props.id,
          url = this.props.url;
    
    return (
      <li className={ id === 'blog' ? 'navItem active' : 'navItem'}
          id={id}>
        <a href={url}
           onClick={this.props.onClick}
           value={id}
           className={url !== '#' && url ? 'navItem__refer not-follow' : 'navItem__refer'}>
          {name}
        </a>
      </li>
    );
  }
}

export { Navigation }; 