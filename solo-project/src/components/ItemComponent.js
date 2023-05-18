import { connect } from 'react-redux';
import { localStorageLogic } from '../helpers/localStorageLogic';
import { bookmarkCheck, modalInfo, modalSwitch, toastSwitch} from '../modules/bookmarkSlice';
import ItemComponentSet from './ItemComponentSet';

const ItemComponent = ({eachData}) => {

  const NAV_CATEGORY = 'Category';
  const NAV_EXHIBITON = 'Exhibition';
  const NAV_PRODUCT = 'Product';
  const NAV_BRAND = 'Brand';
  const publicUrl = process.env.PUBLIC_URL;

  switch(eachData.type){
    case NAV_CATEGORY :
      return (
      <div className='ItemComponent'>
        <ItemComponentSet eachData={eachData} />
        <div className='category-container'>
          <h4>#{eachData.title}</h4>
        </div>
      </div>
      )
    
    case NAV_EXHIBITON : 
      return (
        <div className='ItemComponent'>
        <ItemComponentSet eachData={eachData}/>
        <div className='exhibition-container'>
          <h4>{eachData.title}</h4>
          <p>{eachData.sub_title}</p>
        </div>
      </div>
      )

    case NAV_BRAND : 
      return(
      <div className='ItemComponent'>
        <ItemComponentSet eachData={eachData}/>
        <div className='brand-container'>
          <h4>{eachData.brand_name}</h4>
          <div>
            <h4>관심고객수</h4>
            <p>00,000</p>
          </div>
        </div>
      </div>
      )
    
    case NAV_PRODUCT :
      return(
        <div className='ItemComponent'>
          <ItemComponentSet eachData={eachData}/>
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


export default connect(state => ({data : state.bookmark.data}))(ItemComponent);