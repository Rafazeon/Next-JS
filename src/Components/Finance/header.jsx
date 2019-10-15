import React, { PureComponent } from 'react';
import Link from 'next/link'; 
import { json } from './links'
  
class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenuBar(e) {
    const { open } = this.state;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      open: !open,
    });
  }

  closeMenuBar() {
    this.setState({ open: false });
  }

  linkRedirect = () => {
    return json.map((item, index) =>
      <Link key={index} as={item.link} href={{pathname: item.link, query: { ...item.seo }}}>
          <a className={item.className} style={{backgroundColor: item.bgColor, color: item.color, fontSize: item.fontSize}}>{item.name}</a>
      </Link>
    ) 
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        {/* <script code="2896986161BR" type="text/javascript" src="https://app.mensageiro.io/script.js"></script> */}
        <nav style={{backgroundColor: '#225dab'}} className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
            <div style={{color: '#fff', width: '100%', top: 10, left: 30, fontSize: 20}} className="navbar-burger">Lira Financeira</div>
              <button
                type="button"
                onClick={e => this.toggleMenuBar(e)}
                className={`navbar-burger ${open ? 'is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#fff'
                }}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div style={{backgroundColor: '#225dab'}} className={`navbar-menu ${open ? 'is-active' : ''}`}>
              {this.linkRedirect()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header