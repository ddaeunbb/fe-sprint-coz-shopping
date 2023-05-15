import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Main from './pages/Main';
import ProductList from './pages/ProductList'
import { Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setting } from './modules/bookmarkSlice';
import axios from 'axios'

const App = ({data, setting})=>{

  useEffect(()=>{
    axios('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(res => {
      setting([...res.data]);
    })
  }, [setting])

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/products/list' element={<ProductList/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default connect(state => ({ data : state.bookmark.data}), {setting})(App);