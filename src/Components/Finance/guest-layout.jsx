import React, { Component } from 'react';
import Seo from './seo'
import Header from './header';
import Footer from './footer'; 
import '../../../styles/index.css'
import '../../../styles/bulma.scss' 

class GuestLayout extends Component {
  render() {
    // eslint-disable-next-line
    const { children } = this.props;
    return (
      <div>
        <Seo />
        <Header />
        {children}
        <br />
        <Footer />
      </div>
    )
  }
}

export default GuestLayout
 