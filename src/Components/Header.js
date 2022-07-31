import Button from "./Button"
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

const Header = ({title, showAdd, showAddBtn}) => {
  const location = useLocation();
  return (
    <div className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' &&<Button text={showAddBtn ? 'Close' : 'Add'} color={showAddBtn ? 'red' : 'green'} showAdd={showAdd}/>}
    </div>
  )
}


Header.defaultProps ={
    title: 'Task Tracker',
}

Header.propTypes= {
    title: PropTypes.string.isRequired,
}

export default Header