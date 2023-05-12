import { useState } from 'react'
import ItemComponent from './ItemComponent'

export default function MainList({data, bookmarkHandler}){
  const [mainItem, setMainItem] = useState(data.slice(0,4));

  return (
    <div className='MainList'>
      {
        mainItem.map((el, idx)=> (<ItemComponent key={el.id} eachData={el} bookmarkHandler={bookmarkHandler}/>))
      }
    </div>
  )
}