import { connect } from 'react-redux';
import ItemComponent from './ItemComponent';

const ProductFilter = ({type, data})=>{

  if (type === 'Brand'){
    return (
      <div className='product-list-display'>
        <div className='product-list-displayp-container'>
          {
            data.filter(el=> el.type === type).map(el => (<ItemComponent key={el.id} eachData={el}/>))
          }
        </div>
    </div>
    )
  } else if ( type === 'Product'){
    return (
      <div className='product-list-display'>
        <div className='product-list-displayp-container'>
          {
            data.filter(el=> el.type === type).map(el => (<ItemComponent key={el.id} eachData={el}/>))
          }
        </div>
    </div>
    )
  } else if ( type === 'Category'){
    return (
      <div className='product-list-display'>
        <div className='product-list-displayp-container'>
          {
            data.filter(el=> el.type === type).map(el => (<ItemComponent key={el.id} eachData={el}/>))
          }
        </div>
      </div>
    )
  } else if ( type === 'Exhibition'){
    return (
    <div className='product-list-display'>
      <div className='product-list-displayp-container'>
        {
          data.filter(el=> el.type === type).map(el => (<ItemComponent key={el.id} eachData={el}/>))
        }
      </div>
    </div>
    )
  } else {
    return (
      <div className='product-list-display'>
        <div className='product-list-displayp-container'>
          {
            data.map(el => (<ItemComponent key={el.id} eachData={el}/>))
          }
        </div>
      </div>
    )
  }
}


export default connect(state => ({data : state.bookmark.data}))(ProductFilter);