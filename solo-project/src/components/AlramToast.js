import { useEffect } from 'react';
import { connect } from 'react-redux';
import { toastSwitch } from '../modules/bookmarkSlice';

const AlramToast = ({toastContent, toastSwitch}) => {

  useEffect(()=>{
    setTimeout(()=>{
      toastSwitch();
    }, 1000)
  }, [toastSwitch])

  if (toastContent){
    return(
      <div className='AlramToast'>
        <img src={`${process.env.PUBLIC_URL + '/bookmark-on.png'}`} alt="북마크 채워진 별표" />
        <h3>상품이 북마크에 추가되었습니다.</h3>
      </div>
    )
  } else {
    return (
      <div className='AlramToast'>
        <img src={`${process.env.PUBLIC_URL + '/bookmark-off.png'}`} alt="북마크 빈별표" />
        <h3>상품이 북마크에서 제거되었습니다.</h3>
      </div>
    )
  }
};

export default connect((
  state=> ({toastContent : state.bookmark.toastContent})), 
  {toastSwitch})(AlramToast);