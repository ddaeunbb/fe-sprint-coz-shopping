import { connect } from 'react-redux';
import { useState } from 'react';
import Modal from '../components/Modal';
import BookmarkFilter from '../components/BookmarkFilter'

const Bookmark = ({modal, setIsOpen}) => {
  const [select, setSelect] = useState('Total');
  const [page, setPage] = useState(1);

  const selectHandler = (e)=>{
    setSelect(e.target.className);
  }

  const publicUrl = process.env.PUBLIC_URL;

  return(
    <div className='ProductList' onClick={()=>{setIsOpen(false)}}>
      {
        modal && <Modal />
      }

      <div className='product-list-container'>
          <ul className='filter-tab'>
            <li onClick={ e=> {selectHandler(e); setPage(1);}}>
              <img alt="전체" src={`${publicUrl}/images/total.png`} className='Total'/>
              <span className={`${select === 'Total' && 'selected'}`}>전체</span>
            </li>
            <li onClick={ e=> {selectHandler(e); setPage(1);}}>
              <img alt="상품" src={`${publicUrl}/images/product.png`} className='Product'/>
              <span className={`${select === 'Product' && 'selected'}`}>상품</span>
            </li>
            <li onClick={ e=> {selectHandler(e); setPage(1);}}>
              <img alt="카테고리" src={`${publicUrl}/images/category.png`} className='Category' />
              <span className={`${select === 'Category' && 'selected'}`}>카테고리</span>
            </li>
            <li onClick={ e=> {selectHandler(e); setPage(1);}}>
              <img alt="전시" src={`${publicUrl}/images/exhibition.png`} className='Exhibition'/>
              <span className={`${select === 'Exhibition' && 'selected'}`}>전시</span>
            </li>
            <li onClick={ e=> {selectHandler(e); setPage(1);}}>
              <img alt="브랜드" src={`${publicUrl}/images/brand.png`} className='Brand'/>
              <span className={`${select === 'Brand' && 'selected'}`}>브랜드</span>
            </li>
          </ul>
      </div>

      <BookmarkFilter type={select} page={page} setPage={setPage}/>
    </div>
  )
}

export default connect((state)=> ({modal : state.bookmark.modal}))(Bookmark);