import React from 'react'
import MainHeader from '../../layouts/MainHeader'
import Carts from '../../components/carts'
import { Route, Routes } from 'react-router-dom'
import CartDetail from '../../components/cartDetail'
import Basket from '../../components/basket'

import Successfull from '../../components/Successfull'
import NotSuuccessful from '../../components/NotSuuccessful'
import FinalAuth from '../../components/finalAuth'


const Home = () => {
    
  return (
    <div>
    {/* <MainHeader/> */}
    <Carts/>
    {/* <CartDetail/> */}
    {/* <Basket/> */}
    {/* <FinalBasket/> */}
    {/* <NotSuuccessful/> */}
    {/* <Successfull/> */}
    {/* <FinalAuth/> */}
    </div>
  )
}

export default Home
