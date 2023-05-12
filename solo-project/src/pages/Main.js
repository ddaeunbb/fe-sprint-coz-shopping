import MainList from '../components/MainList'

export default function Main({data, bookmarkHandler}){

  return(
    <div className='Main'>
      <div className='main-container'>
        <div>
          <h3>상품리스트</h3>
          <MainList data={data} bookmarkHandler={bookmarkHandler}/>
        </div>

        <div>
          <h3>북마크리스트</h3>
        </div>
      </div>
    </div>
  )
}