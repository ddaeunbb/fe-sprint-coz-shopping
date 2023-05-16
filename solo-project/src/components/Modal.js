import { connect } from 'react-redux'
import { bookmarkCheck, modalInfo, modalSwitch} from '../modules/bookmarkSlice';

const Modal = ({modalData, bookmarkCheck, modalInfo, modalSwitch}) => {

  const modalHandler = ()=> {
    bookmarkCheck(modalData.id);
    modalInfo(modalData.id);
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
        onClick={modalHandler}
        alt="북마크별사진" />
        <h3>{modalData.title ? modalData.title : modalData.brand_name}</h3>
        </div>
      </div>
    </div>
  )
}

export default connect((state)=> ({ modalData : state.bookmark.modalData}), { bookmarkCheck, modalInfo, modalSwitch})(Modal)