import React from 'react'
import Aheader from '../Components/Aheader'
import Afooter from '../Components/Afooter'
import { Link, NavLink } from 'react-router-dom'

function Adashboard() {
  return (
    <div>
        
        <Aheader></Aheader>

        <div className="container">
        <div className="row">
        <div className="col-6">
        <table className='table border border-3 table-responsive table-hover'>
        <thead className="thead-dark">
        <tr>
        <th className='text-center'>
          <h4>

          Add Items
          </h4>
          
          </th>
        </tr>
        
          </thead>

          <tbody className='text-center h5'>
            <tr>
              <td>
              <NavLink to="/addservices" className="dropdown-item">
                    Add Services
                  </NavLink>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/addpackages" className="dropdown-item">
                Add Package
              </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/addguide" className="dropdown-item">
                Add Guide
              </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/adddestination" className="dropdown-item">
                Add Destination
              </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/addtesti" className="dropdown-item">
                Add Testimonial
              </Link>
              </td>
            </tr>
          </tbody>

        </table>
        </div>


        <div className="col-6">
        <table className='table border border-3 table-responsive table-hover'>
        <thead className="thead-dark">
        <tr>
        <th className='text-center'>
          <h4>

          Manage Items
          </h4>
          </th>
        </tr>
        
          </thead>

          <tbody className='text-center h5'>
            <tr>
              <td>
              <Link to="/manageservices" className="dropdown-item">
                    Manage Services
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/managepackages" className="dropdown-item">
                    Manage Package
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/manageguide" className="dropdown-item">
                    Manage Guide
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/managedestination" className="dropdown-item">
                    Manage Destination
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/managetesti" className="dropdown-item">
                    Manage Testimonial
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/manageabout" className="dropdown-item">
                    Manage About Us
                  </Link>
              </td>
            </tr>
          </tbody>

        </table>
        </div>
        </div>
        </div>
        <Afooter></Afooter>
    </div>
  )
}

export default Adashboard