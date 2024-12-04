import React from 'react'
import PopularBooks from './PopularBooks'
import Allbooks from './Allbooks'
import ImageSlider from './ImageSlider'

import Navbar from './Navbar'


const Home = () => {
  return (
    <><div>
    <Navbar/>
    <ImageSlider/>
    <PopularBooks/>
    </div>
     </>
  )
}

export default Home