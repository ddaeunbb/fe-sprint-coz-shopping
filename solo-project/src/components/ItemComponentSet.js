import { connect } from 'react-redux';
import { bookmarkCheck, modalInfo, modalSwitch, toastSwitch} from '../modules/bookmarkSlice';
import { localStorageLogic } from '../helpers/localStorageLogic';

const ItemComponentSet = ({eachData, modalInfo, modalSwitch, bookmarkCheck})=>{
  const publicUrl = process.env.PUBLIC_URL;

  const modalHandler = () => {
    modalInfo(eachData.id);
    modalSwitch();
  }

  const bookmarkHandler = (e) => {
    e.stopPropagation();
    bookmarkCheck(eachData.id);
    toastSwitch();
    localStorageLogic(e, eachData);
  }

  if(eachData.type === 'Brand'){
    return(
      <div className='item-container' onClick={modalHandler}  
      style={{backgroundImage: 
      `url(${eachData.brand_image_url ? 
      eachData.brand_image_url
      : publicUrl + '/defaultImage.jpeg'})`}}>

        <img className='bookmark-img' 
        src={`${eachData.bookmark ? 
        publicUrl + '/bookmark-on.png'
        : publicUrl + '/bookmark-off.png'}`}
        onClick={(e)=> bookmarkHandler(e) }
        alt="북마크별사진" />
      </div>
    )
  } else {
    return (
      <div className='item-container' onClick={modalHandler} 
      style={{backgroundImage: 
      `url(${eachData.image_url ? 
      eachData.image_url 
      : publicUrl + '/defaultImage.jpeg'})`}}>
  
        <img className='bookmark-img' 
        src={`${eachData.bookmark ? 
        publicUrl + '/bookmark-on.png'
        : publicUrl + '/bookmark-off.png'}`}
        onClick={(e)=> bookmarkHandler(e) }
        alt="북마크별사진" />
      </div>
    )
  }
}

export default connect(state => ({data : state.bookmark.data}), { bookmarkCheck, modalInfo, modalSwitch, toastSwitch })(ItemComponentSet);