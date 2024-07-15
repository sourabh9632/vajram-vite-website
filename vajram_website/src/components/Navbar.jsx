import React from 'react'
 
 import { Link } from 'react-router-dom';


 
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
           
        </li>
        <Link className="navbar-brand" to="/">featured</Link>
        <Link className="navbar-brand" to="/text">text</Link>
        <Link className="navbar-brand" to="/new">new</Link>
        
       
      </ul>
      
    </div>
   
  </div>
</nav>

    
    </>
 
  )
}

export default Navbar