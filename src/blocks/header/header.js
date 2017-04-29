import React from 'react';
import ReactDOM from 'react-dom';

function Header(props) {
  return (
    <div className='header'>
      <div className='container'>
        <Logo />
        <Search />
      </div>
    </div>
  );
}

function Logo(props) {
  return (
    <div className='navContent__logo logo navbar-header'>
      <a id='logo' 
         className='navbar-brand' 
         href="index.html">
        <h1 className='logo__name'>  
          Filipp Zhuravlev 
        </h1>
      </a>
      <button className='logo__navButton navbar-toggle collapsed' 
              type='button'
              data-toggle='collapse'
              data-target='#collapsable'
              aria-expanded='false'>
        <span className='sr-only'> Toggle navigation</span>
        <span className='icon-bar' />
        <span className='icon-bar' />
        <span className='icon-bar' />
      </button>
    </div>
  );
}


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.toggleChange =  this.toggleChange.bind(this);
  }
  
  toggleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  
  render() {
    return (
      <div className='search'>
        <form id='searchForm'>
          <input placeholder='Поиск' 
               onChange={this.toggleChange} 
               type='search'
               className='search__controller' 
          />
        </form>
      </div>
      );
  }
}

const menu = [
  {
    name: 'Блог',
    id: 'blog'
  },
  {
    name: 'Контакты',
    id: 'contacts'
  },
  {
    name: 'Портфолио',
    id: 'protfolio'
  },
  {
    name: 'Обо мне',
    id: 'about'
  },
  {
    name: 'Архив',
    id: 'archive'
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
        archive: false
    };
    
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
   toggleMenu(e) {
//    $('.navItem').removeClass('active');
    this.setState({
        blog: false,
        contacts: false,
        portfolio: false,
        about: false,
        archive: false
    });
    this.state[e.target.value] = true;
//    this.setState({
//      {e.target.value}: true
//    });
  }
  
  render() {
    const navItems = menu.map((a) => {
      return <NavItem 
        isActive={a.id} 
        name={a.name}
        key={a.id}
        onClick={this.toggleMenu} />;
    });
    
    return (
      <nav className='navigaton'>
        <ul className='navList'>
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
          isActive = this.state.isActive = this.props.isActive,
          active = isActive ? ' active' : '';
    
    return (
      <li className={'navItem' + active}
          onClick={this.props.onClick}
          defaultValue={id}>
        <a id={id}
           href='#'
           className='navItem__refer'>
          {name}
        </a>
      </li>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));