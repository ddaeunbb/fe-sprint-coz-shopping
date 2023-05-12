import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavModal from './NavModal';


export default function Nav(){
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className='Navbar'>
      <div className='logo-container'>
        <div className='left-logo'>
          <Link to="/"><img className='logo' src={process.env.PUBLIC_URL + 'codestates-logo.png' }/></Link>
          <Link to="/"><h2>COZ Shopping</h2></Link>
        </div>
        <div className='right-logo' onClick={()=>{ setIsOpen(!isOpen)}}>
          <img className='hamburger' src={process.env.PUBLIC_URL + 'hamburger.png'}/>
        </div>
      </div>
      { isOpen ? <NavModal /> : null}
    </div>
  )
}