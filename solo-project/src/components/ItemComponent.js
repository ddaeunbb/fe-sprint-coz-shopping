export default function ItemComponent({eachData, bookmarkHandler}){
  console.log(eachData);

  if (eachData.type === 'Category'){
    return (
      <div className='ItemComponent'>
        
        <div className='item-container' 
        style={{backgroundImage: 
        `url(${eachData.image_url ? 
        eachData.image_url 
        : process.env.PUBLIC_URL + 'defaultImage.jpeg'})`}}>

          <img className='bookmark-img' 
          src={`${eachData.bookmark ? 
          process.env.PUBLIC_URL + 'bookmark-on.png'
          : process.env.PUBLIC_URL + 'bookmark-off.png'}`}
          onClick={()=>{bookmarkHandler(eachData.id)}}
          />
        </div>

        <p>#{eachData.title}</p>
      </div>
    )
  }
}
