import React from 'react';
import Header from '../Header/Header';
import './Content.css';

class Content extends React.Component {
  render() {
    var data = {
      imgUrl: "https://goo.gl/VL4xAB",
      name: "Eugen Ignatov",
      email: "ignatov.dev@gmail.com",
      phone: "+38 (063) 285 42 31",
      address: "Ukraine, Kiev",
      github: "https://www.github.com/johnnyignatov",
      facebook: "https://www.facebook.com/evgeniy.ignatov.50",
      linkdin: "https://www.linkedin.com/in/evgeniy-ignatov-56a363144/"
    }
    return (
      <div>
        <Header />
        <div className="content">
          <img className="user-img" src={data.imgUrl} alt="user"></img>
          <h1>{data.name}</h1>
          <h3 className="email"><img className="phone-link" src="https://image.flaticon.com/icons/svg/12/12194.svg" alt="github"></img>{data.email}</h3>
          <h3><img className="phone-link" src="https://image.flaticon.com/icons/svg/0/191.svg" alt="github"></img>{data.phone}</h3>
          <h3><img className="location-link" src="https://image.flaticon.com/icons/svg/34/34250.svg" alt="github"></img>{data.address}</h3>
          <h3><a href={data.github} className="social"><img className="github-link social-link" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github"></img></a>
          <a href={data.facebook} className="social"><img className="facebook-link social-link" src="https://image.flaticon.com/icons/png/512/20/20673.png" alt="github"></img></a>
          <a href={data.linkdin} className="social"><img className="linkdin-link social-link" src="https://image.flaticon.com/icons/svg/8/8707.svg" alt="github"></img></a>
        </h3>
      </div>
      </div>
    );
  }
}

// class Content extends React.Component {
//   render() {
//     return (
//       <div className="content">
//         <h1>Content</h1>
//       </div>
//     );
//   }
// }
//
export default Content;
