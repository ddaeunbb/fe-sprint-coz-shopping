import MainList from '../components/MainList'
import BookmarkList from '../components/BookmarkList';
import { connect } from 'react-redux';
import Modal from '../components/Modal';

const Main = ({modal, setIsOpen}) => {

  return(
    <div className='Main' onClick={()=>{ setIsOpen(false)}}>
      <div className='main-container'>
        <div>
          <h3>상품리스트</h3>
          <MainList/>
        </div>

        <div>
          <h3>북마크리스트</h3>
          <BookmarkList />
        </div>
      </div>

      {
        modal && <Modal />
      }
    </div>
  )
}

export default connect((state)=> ({modal : state.bookmark.modal}))(Main);