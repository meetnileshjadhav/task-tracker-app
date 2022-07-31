import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
        <h3>This is React Js Website</h3>
        <h4>Includes: useState, useEffect, useLocation, Routing</h4>
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About