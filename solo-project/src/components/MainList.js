import { connect } from 'react-redux'
import ItemComponent from './ItemComponent'


const MainList = ({data}) => {

  return (
    <div className='MainList'>
      {
        data.slice(0,4).map(el => (<ItemComponent key={el.id} eachData={el}/>))
      }
    </div>
  )
}

export default connect(state=> ({data : state.bookmark.data}))(MainList)