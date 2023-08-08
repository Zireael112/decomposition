import React from 'react'
import { Title } from '../Title'
import { News } from '../News/News'

export const Widget = ({title}) => {
    const datas = {
        description: "bear",
      }
  return (
    <div className='widget'>
        <Title title={title}></Title>
        <div className='widget-content'>
            <News props = {datas}>test</News>
            <News props = {datas}>test</News>
            <News props = {datas}>test</News>
        </div>
    </div>
  )
}
