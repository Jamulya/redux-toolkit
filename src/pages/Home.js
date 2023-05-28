import React from 'react'
import Products from '../Components/Products'
import Helmet from '../Components/Helmet'

const Home = () => {
  return (
   <Helmet title={'Home'}>
     <Products/>
   </Helmet>
     
    
  )
}

export default Home