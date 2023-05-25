import { css, styled} from 'styled-components'
import globalToken from '../tokens/global.json'

const { Spacing } = globalToken;
const publicUrl = process.env.PUBLIC_URL;

const Nav = styled.div`
  width: ${Spacing[64].value}px;
  height: ${Spacing[64].value}px;
  border: none;
  border-radius: 50%;
  background-size : cover;
  background-color: blue;
`

export default function FilterNav() {
  return (
    <div style={{display: "flex", gap: "10px"}}>
      <Nav />
      <Nav style={{backgroundImage : `url(${publicUrl+'/images/brand.png'})`}}/>
      <Nav style={{backgroundImage : `url(${publicUrl+'/images/category.png'})`}}/>
      <Nav style={{backgroundImage : `url(${publicUrl+'/images/exhibition.png'})`}}/>
      <Nav style={{backgroundImage : `url(${publicUrl+'/images/product.png'})`}}/>
      <Nav style={{backgroundImage : `url(${publicUrl+'/images/total.png'})`}}/>
    </div>
  )
}
