import { useState } from 'react';
import { css, styled } from 'styled-components';
import globalToken from '../tokens/global.json'

const { Spacing, borderRadius, Primary, Gray, White, PrimaryFocus} = globalToken;

const StarImage = styled.img`
  width: ${Spacing[36].value}px;
  cursor: pointer;

  &:focus{

  }
`

export default function Star({eachData}) {
  const [click, setClick] = useState(false);
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <>
      <StarImage src={click ? publicUrl + '/bookmark-on.png' : publicUrl + '/bookmark-off.png'}
      onClick={()=>setClick(!click)}
      alt='북마크별표'/>
    </>
  )
}
