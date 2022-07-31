import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location= useLocation();
  
  return (
    <div className='footer'>
        {location.pathname === '/' && <small className="reminder-click">(** Double click to chage Reminder)</small>}
        <Link to='/about'>About Project</Link>
        <p>Copyrights &copy; NJ-Projects, 2022</p>
    </div>
  )
}

export default Footer