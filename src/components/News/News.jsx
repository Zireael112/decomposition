import React from 'react'
import { Img } from '../Img'

export const News = ({props}) => {
    const {description, src = '', classes = ''} = props
    const datas = {
      src: src,
      class: classes
    }
  return (
    <> 
        {src ? <Img src={datas}></Img> : undefined}
        <h4>{description}</h4>
    </>
  )
}
