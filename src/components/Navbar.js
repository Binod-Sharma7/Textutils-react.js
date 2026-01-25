import React from 'react'
import PropTypes from 'prop-types'

function Navbar( { title = "title here", Action = "action here" })  {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position: 'sticky', top: 0, zIndex: 1000}}>
  <div className="container-fluid">
    <a className="navbar-brand font-bold text-20" href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
    
  )
}
Navbar.propTypes={title:PropTypes.string,
 Action:PropTypes.string
}

export default Navbar;