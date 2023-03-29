import React from 'react'
import { Link } from 'react-router-dom';


export default function Charts() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-#78ADD2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >Charts</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Bar3DChart" className="nav-link active" aria-current="page" >Bar3DChart</Link>
              </li>
              <li className="nav-item">
                <Link to="/LineGraph" className="nav-link active">LineGraph</Link>
              </li>
              <li className="nav-item">
                <Link to="/GeoChart" className="nav-link active">GeoChart</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}
