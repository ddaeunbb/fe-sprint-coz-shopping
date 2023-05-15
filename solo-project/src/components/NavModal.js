import { Link } from 'react-router-dom'

export default function NavModal(){
  return (
    <div className='NavModal'>
      <Link to="/"><p className='navmodal-list'>김다은님, 안녕하세요!</p></Link>
      <Link to="/products/list"><p className='navmodal-list'>📋 상품리스트 페이지</p></Link>
      <Link to="/bookmark"><p className='navmodal-list'>⭐️ 북마크 페이지</p></Link>
    </div>
  )
}