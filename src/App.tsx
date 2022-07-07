import React from 'react'
import './styles/index.scss';
import 'antd/dist/antd.min.css'
import { GalleryPage } from 'components/GalleryPage';
import {Typography} from 'antd'

const  App:React.FC= () =>{
  return (    
    <div className='main-layout'>
      <Typography.Title className='main-title'>Dummy App</Typography.Title>
      <GalleryPage />
    </div>
  );
}

export default App;
