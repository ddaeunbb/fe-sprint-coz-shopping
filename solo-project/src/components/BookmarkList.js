import { connect } from 'react-redux'
import ItemComponent from './ItemComponent'


const BookmarkList = ({data}) => {

  return (
    <div className='BookmarkList'>
      {
        data.filter(el => el.bookmark).slice(0,4).map(el => (<ItemComponent key={el.id} eachData={el}/>))
      }
    </div>
  )
}

export default connect(state=> ({data : state.bookmark.data}))(BookmarkList)