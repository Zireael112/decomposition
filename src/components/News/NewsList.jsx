import React from 'react'
import { Title } from '../Title'

export const NewsList = ({title, children}) => {
  return (
    <div className='news-list'>
      <Title title={title}></Title>
      {React.Children.map(children, child => <div className='new'>{child}</div>)}
    </div>
  )
}
