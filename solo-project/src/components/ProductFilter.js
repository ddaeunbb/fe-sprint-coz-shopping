import { connect } from 'react-redux';
import { useRef, useEffect, useState } from 'react';
import ItemComponent from './ItemComponent';

const ProductFilter = ({ type, data, page, setPage}) => {
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
  }, [page]);

  if (type === 'Brand') {
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {data.filter((el) => el.type === type).slice(0, page * 8).map((el) => (
            <ItemComponent key={el.id} eachData={el} />
          ))}
        </div>
      </div>
    );
  } else if (type === 'Product') {
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {data.filter((el) => el.type === type).slice(0, page * 8).map((el) => (
            <ItemComponent key={el.id} eachData={el} />
          ))}
        </div>
      </div>
    );
  } else if (type === 'Category') {
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {data.filter((el) => el.type === type).slice(0, page * 8).map((el) => (
            <ItemComponent key={el.id} eachData={el} />
          ))}
        </div>
      </div>
    );
  } else if (type === 'Exhibition') {
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {data.filter((el) => el.type === type).slice(0, page * 8).map((el) => (
            <ItemComponent key={el.id} eachData={el} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='product-list-display'>
        <div className='product-list-display-container'>
          {[...data].slice(0, page * 8).map((el) => (
            <ItemComponent key={el.id} eachData={el} />
          ))}
        </div>
      </div>
    );
  }
};

export default connect((state) => ({ data: state.bookmark.data }))(ProductFilter);
