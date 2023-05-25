import { styled } from 'styled-components';
import globalToken from '../tokens/global.json'

const { borderRadius } = globalToken;
const publicUrl = process.env.PUBLIC_URL;

const CardContainer = styled.div`
  width : 264px;
  height: 180px;
  cursor: pointer;
  background-size: cover;
  border-radius: ${borderRadius[8].value}px;
`

export default function Card() {
  return (
    <div style={{display: "flex", gap: "10px"}}>
      <CardContainer style={{backgroundImage: `url(${publicUrl+'/defaultImage.jpeg'})`}}/>
      <CardContainer style={{backgroundImage : 'url(https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)'}}/>
    </div>
  )
}
