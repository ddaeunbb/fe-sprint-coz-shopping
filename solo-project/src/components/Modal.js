import { connect } from 'react-redux'
import { bookmarkCheck, modalInfo, modalSwitch, toastSwitch} from '../modules/bookmarkSlice';

const Modal = ({modalData, bookmarkCheck, modalInfo, modalSwitch, toastSwitch}) => {

  const modalHandler = (e)=> {
    bookmarkCheck(modalData.id);
    modalInfo(modalData.id);
    toastSwitch();
    if ( e.target.src === `http://localhost:3000/bookmark-on.png`){
      let bookmark = JSON.parse(localStorage.getItem('bookmark'));
      bookmark = bookmark.filter(el => el !== modalData.id);
      localStorage.setItem('bookmark', JSON.stringify(bookmark));
    } else {
      let bookmark = localStorage.getItem('bookmark');
      if (bookmark === null) localStorage.setItem('bookmark', JSON.stringify([modalData.id]));
      else {
        bookmark = JSON.parse(bookmark);
        bookmark.push(modalData.id);
        localStorage.setItem('bookmark', JSON.stringify(bookmark));
      }
    }
  }

  return (
    <div className='Modal'>
      <div className='modal-background' onClick={modalSwitch}></div>
      <div className='modal-content' 
      style={{backgroundImage : `url(${ modalData.image_url ? 
      modalData.image_url : modalData.brand_image_url})`}}>

        <button className='close-btn' onClick={modalSwitch}>X</button>
        
        <div className='modal-bookmark-container'>
        <img className='bookmark-modal-img'
        src={`${modalData.bookmark ? 
        process.env.PUBLIC_URL + '/bookmark-on.png'
        : process.env.PUBLIC_URL + '/bookmark-off.png'}`}
        onClick={e => modalHandler(e)}
        alt="북마크별사진" />
        <h3>{modalData.title ? modalData.title : modalData.brand_name}</h3>
        </div>
      </div>
    </div>
  )
}

export default connect((state)=> ({ modalData : state.bookmark.modalData}), { bookmarkCheck, modalInfo, modalSwitch, toastSwitch})(Modal)