import { connect } from 'react-redux';
import { bookmarkCheck, modalInfo, modalSwitch, toastSwitch} from '../modules/bookmarkSlice';

const ItemComponent = ({eachData, bookmarkCheck, modalInfo, modalSwitch, toastSwitch}) => {

  const modalHandler = () => {
    modalInfo(eachData.id);
    modalSwitch();
  }

  const bookmarkHandler = (e) => {
    e.stopPropagation();
    bookmarkCheck(eachData.id);
    toastSwitch();
  }

  if (eachData.type === 'Category'){
    return (
      <div className='ItemComponent'>
        <div className='item-container' onClick={modalHandler} 
        style={{backgroundImage: 
        `url(${eachData.image_url ? 
        eachData.image_url 
        : process.env.PUBLIC_URL + '/defaultImage.jpeg'})`}}>

          <img className='bookmark-img' 
          src={`${eachData.bookmark ? 
          process.env.PUBLIC_URL + '/bookmark-on.png'
          : process.env.PUBLIC_URL + '/bookmark-off.png'}`}
          onClick={(e)=> bookmarkHandler(e) }
          alt="북마크별사진" />
        </div>
        <div className='category-container'>
          <h4>#{eachData.title}</h4>
        </div>
      </div>
    )
  } else if (eachData.type === 'Exhibition'){
    return (
      <div className='ItemComponent'>
        
      <div className='item-container' onClick={modalHandler} 
      style={{backgroundImage: 
      `url(${eachData.image_url ? 
      eachData.image_url 
      : process.env.PUBLIC_URL + '/defaultImage.jpeg'})`}}>
  
        <img className='bookmark-img' 
        src={`${eachData.bookmark ? 
        process.env.PUBLIC_URL + '/bookmark-on.png'
        : process.env.PUBLIC_URL + '/bookmark-off.png'}`}
        onClick={(e)=> bookmarkHandler(e) }
        alt="북마크별사진" />
      </div>
      <div className='exhibition-container'>
        <h4>{eachData.title}</h4>
        <p>{eachData.sub_title}</p>
      </div>
    </div>
    )
  } else if (eachData.type === 'Brand'){
    return (
      <div className='ItemComponent'>
        <div className='item-container' onClick={modalHandler}  
        style={{backgroundImage: 
        `url(${eachData.brand_image_url ? 
        eachData.brand_image_url
        : process.env.PUBLIC_URL + '/defaultImage.jpeg'})`}}>
  
        <img className='bookmark-img' 
        src={`${eachData.bookmark ? 
        process.env.PUBLIC_URL + '/bookmark-on.png'
        : process.env.PUBLIC_URL + '/bookmark-off.png'}`}
        onClick={(e)=> bookmarkHandler(e) }
        alt="북마크별사진" />
      </div>
      <div className='brand-container'>
        <h4>{eachData.brand_name}</h4>
        <div>
          <h4>관심고객수</h4>
          <p>00,000</p>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div className='ItemComponent'>
      <div className='item-container' onClick={modalHandler} 
      style={{backgroundImage: 
      `url(${eachData.image_url ? 
      eachData.image_url
      : process.env.PUBLIC_URL + '/defaultImage.jpeg'})`}}>

      <img className='bookmark-img' 
      src={`${eachData.bookmark ? 
      process.env.PUBLIC_URL + '/bookmark-on.png'
      : process.env.PUBLIC_URL + '/bookmark-off.png'}`}
      onClick={(e)=> bookmarkHandler(e) }
      alt="북마크별사진" />
    </div>
    <div className='product-container'>
      <h4>{eachData.title}</h4>
      <div>
        <h4>{eachData.discountPercentage}%</h4>
        <p>{eachData.price}원</p>
      </div>
    </div>
  </div>
    )
  }
}


export default connect(state => ({data : state.bookmark.data}), { bookmarkCheck, modalInfo, modalSwitch, toastSwitch })(ItemComponent);