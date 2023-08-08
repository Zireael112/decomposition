/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export const Img = ({src}) => {
  return (
    <img src={src.src} className={src.class}></img>
  )
}
