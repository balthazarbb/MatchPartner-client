import React from 'react'
import {Link} from 'react-router-dom'


function HomePage() {
  return (
    <div >
      <h1>welcome to matchpartner</h1>
      
      <Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
      <Link  style={{marginLeft: '10px'}}  to="/signin">LogIn</Link>
      
      
    </div>
  );
}

export default HomePage;
