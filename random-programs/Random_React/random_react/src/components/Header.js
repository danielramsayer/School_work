import React, { Component } from 'react';
{/*} This is a state standard component
class Header extends Component {
  render() {
    return (
      <div>
        <p>Header!</p>
      </div>
    );
  }
}
export default Header;
*/}
//This is a stateless component
export const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <div className="nav navbar-nav"></div>
          <li><a href="#">Home Alone!</a></li>
        </div>
      </div>
    </nav>
  )
}
