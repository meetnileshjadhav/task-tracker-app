import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <Link to='/about'>About Project</Link>
        <p>Copyrights &copy; NJ-Projects, 2022</p>
    </div>
  )
}

export default Footer