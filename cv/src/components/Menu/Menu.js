import React from 'react';
import {Link} from 'react-router';
import './Menu.css'

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu" onClick={this.changeColor}>
        <Link to="/" className="menu-link">Home</Link>
        <Link to="/about" className="menu-link">About</Link>
      </ul>
    );
  }
}

export default Menu;

// class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeLink: 'Home'
//     };
//   }
//
//   changeColor = function (e) {
//     e.preventDefault();
//     var curentLink = e.target;
//     var links = document.querySelectorAll('.menu-link');
//     links.forEach(function (item) {
//       item.classList.remove('active');
//     })
//     curentLink.classList.toggle('active');
//   }.bind(this)
//
//   render() {
//     var menu = ['Home', 'About me', 'Projects', 'Contact']
//     return (
//       <ul className="menu" onClick={this.changeColor}>
//         {menu.map((item) => {
//           return (
//             <li className="menu-item" key={item}><a href={item} className="menu-link">{item}</a></li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
// export default Menu;
