import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Main from './pages/Main';
import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function App(){
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const bookmarkHandler = (id)=>{
    let copy = [...data];
    copy = copy.map(el => {
      if(el.id === id){
        el.bookmark === undefined ? el.bookmark = true : el.bookmark = !el.bookmark;
      }
      return el;
    });
    setData(copy);
  }

  useEffect(()=>{
    axios('http://cozshopping.codestates-seb.link/api/v1/products')
    .then(res => {
      setData(res.data);
      setIsLoading(false);
    })
  }, [])

  return (
    <div>
      <Nav/>
      { isLoading ? <h3>로딩중입니다.</h3> :
      <Routes>
        <Route path='/' element={<Main data={data} bookmarkHandler={bookmarkHandler}/> }/>
        {/* <Route path='/' element={<Main/>}/>
        <Route path='/' element={<Main/>}/> */}
      </Routes>}
      <Footer />
    </div>
  )
}