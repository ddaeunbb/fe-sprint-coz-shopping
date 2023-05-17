import { connect } from 'react-redux';
import { useRef, useEffect} from 'react';
import ItemComponent from './ItemComponent';

const NAV_EXHIBITION = 'Exhibition';
const NAV_BRAND = 'Brand';
const NAV_PRODUCT = 'Product';
const NAV_CATEGORY = 'category';

const BookmarkFilter = ({type, data, page, setPage})=>{
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollPosition === scrollHeight) {
        setPage(page + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setPage, page]);

  if (type === NAV_BRAND){
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {
            data.filter(el=> el.type === type && el.bookmark).slice(0, page * 8).map(el => (<ItemComponent key={el.id} eachData={el}/>))
          }
        </div>
    </div>
    )
  } else if ( type === NAV_PRODUCT){
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {
            data.filter(el=> el.type === type && el.bookmark).slice(0, page * 8).map(el => (<ItemComponent key={el.id} eachData={el}/>))
          }
        </div>
    </div>
    )
  } else if ( type === NAV_CATEGORY){
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {
            data.filter(el=> el.type === type && el.bookmark).slice(0, page * 8).map(el => (<ItemComponent key={el.id} eachData={el}/>))
          }
        </div>
      </div>
    )
  } else if ( type === NAV_EXHIBITION){
    return (
    <div className='product-list-display'>
      <div className='product-list-display-container'>
        {
          data.filter(el=> el.type === type && el.bookmark).slice(0, page * 8).map(el => (<ItemComponent key={el.id} eachData={el}/>))
        }
      </div>
    </div>
    )
  } else {
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {
            data.filter(el => el.bookmark).slice(0, page * 8).map(el => (<ItemComponent key={el.id} eachData={el}/>))
          }
        </div>
      </div>
    )
  }
}


export default connect(state => ({data : state.bookmark.data}))(BookmarkFilter);