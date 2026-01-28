
import PropTypes from 'prop-types'
import Toggle from './DarkMode';

import { Link } from 'react-router-dom';
function Navbar( { title = "title here", showAlert })  {
  return (
    <div>
      <nav className="navbar navbar-expand-lg   " style={{position: 'sticky', top: 0, zIndex: 1000}}>
  <div className="container-fluid">
    <a className="navbar-brand font-bold text-20" href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        
      </ul>
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input" onClick={()=>
    {
      Toggle(showAlert);
    }
  } type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label "  htmlFor="switchCheckDefault">Darkmode</label>
</div>

  </div>
</nav>
    </div>
    
  )
}
Navbar.propTypes={title:PropTypes.string,
 showAlert:PropTypes.func
}

export default Navbar;