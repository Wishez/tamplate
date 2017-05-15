import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Blog from './Blog';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header activeBlog={true}
          activeContacts={false}
          activeAbout={false}
          activeArchive={false}
        />
        <Main content={<Blog />}/>
        <Footer />
      </div>
    );
  }
}