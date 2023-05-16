import { Link } from 'react-router-dom';
import NavModal from './NavModal';


export default function Nav({isOpen, setIsOpen}){

  return (
    <div className='Navbar'>
      <div className='logo-container'>
        <div className='left-logo'>
          <Link to="/"><img alt="코드스테이츠로고" className='logo' src={process.env.PUBLIC_URL + 'codestates-logo.png' }/></Link>
          <Link to="/"><h2>COZ Shopping</h2></Link>
        </div>
        <div className='right-logo' onClick={()=>{ setIsOpen(!isOpen)}}>
          <img alt="햄버거버튼" className='hamburger' src={process.env.PUBLIC_URL + 'hamburger.png'}/>
        </div>
      </div>
      { isOpen && <NavModal setIsOpen={setIsOpen}/>}
    </div>
  )
}