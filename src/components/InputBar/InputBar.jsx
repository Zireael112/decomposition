import React from 'react'
import { Url } from './Url'
import { Input } from './Input'
import { Btn } from './Btn'

export const InputBar = () => {
  return (
    <div className='inputBar'>
        <div className='urls'>
            <Url urlTitle = 'Видео'></Url>
            <Url urlTitle = 'Видео'></Url>
            <Url urlTitle = 'Видео'></Url>
            <Url urlTitle = 'Видео'></Url>
            <Url urlTitle = 'Видео'></Url>
            <Url urlTitle = 'Видео'></Url>
            <Url urlTitle = 'Видео'></Url>
            <Url urlTitle = 'Видео'></Url>
        </div>
        <div className='input-btn'>
            <Input></Input>
            <Btn></Btn>
        </div>
        
    </div>
  )
}
