import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Main from './pages/Main';
import ProductList from './pages/ProductList'
import Bookmark from './pages/Bookmark';
import AlramToast from './components/AlramToast';
import { Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setting } from './modules/bookmarkSlice';
import axios from 'axios'

const App = ({data, setting, clicked})=>{

  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    axios('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(res => {
      let bookmark = localStorage.getItem('bookmark');
      if (bookmark === null) {
        setting([...res.data])
      } else {
        bookmark = JSON.parse(bookmark);
        let data = res.data;
        data = data.map(el => {
          if(bookmark.indexOf(el.id) !== -1) el.bookmark = true;
          return el 
        });
        setting(data);
      }
    })
  }, [setting])

  return (
    <div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Routes>
        <Route path='/' element={<Main setIsOpen={setIsOpen}/>} />
        <Route path='/products/list' element={<ProductList setIsOpen={setIsOpen}/>} />
        <Route path='bookmark' element={<Bookmark setIsOpen={setIsOpen}/>} />
      </Routes>
      <Footer />
      {
        clicked && <AlramToast/>
      }
    </div>
  )
}

export default connect(state => ({ data : state.bookmark.data, clicked : state.bookmark.clicked}), {setting})(App);