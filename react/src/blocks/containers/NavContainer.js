import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navigation from './../components/Navigation';
import { selectNavigationItem } from './../actions/navigationActions.js';

class NavContainer extends Component {
  static PropTypes = { 
      navigationItems: PropTypes.array.isRequired,
      dispatch: PropTypes.func.isRequired
  }

  state = {
      isOpen: false,
      navStyles: {
        width: '0',
        opacity: '0'
      }
  };

  openMenu = () => {
    
    if (!this.state.isOpen) {
      let width;

      if (window.innerWidth <= 800)
        width = '100%';
      else 
        width = '20vw';

      this.setState({
        isOpen: true,
        navStyles: {
          'width': width,
          'opacity': '1'
        }
      });
      
    } else {
      this.closeMenu();
    }
  };

  smoothRise = e => {
    let element = $(e.target).attr('href');
    if (!element)
      element = $(e.target).parent().attr('href');
    const pathTo = $(element).offset().top;
    
    $('body, html')
      .stop()
      .animate({
        scrollTop: pathTo
      }, 800);
  }

  changeActiveNavigationItem = navigationItem => 
      () => this.props.dispatch(selectNavigationItem(navigationItem));


  getActiveClasses = state => ( 
    classNames({
      'navItem': true,
      'navItem--active': state
    })
  );
   
  closeMenu = () => {
    this.setState({
        isOpen: false,
        navStyles: {
          'width': '0',
          'opacity': '0'
        }
      });
  }


  render() {

    return (
        <Navigation {...this.props}
            navStyles={this.state.navStyles}
            getActiveClasses={this.getActiveClasses}
            openMenu={this.openMenu}
            closeMenu={this.closeMenu}
            changeActiveNavigationItem={this.changeActiveNavigationItem}
            smoothRise={this.smoothRise}
        />
    );
  }
}


const mapStateToProps = state => {
  const { navigation } = state;
  let navigationItems = [];

  for (const prop in navigation) {
    navigationItems.push(navigation[prop]);
  }
  
  return {
    navigationItems
  }
}

export default withRouter(connect(mapStateToProps)(NavContainer));