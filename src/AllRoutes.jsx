import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Button from './Buttons/Buttons';
import Product from './Product/Product';
import Show from './Show/Show';
import ViewProduct from './View/ViewProduct';
import Orders from './Orders/Orders';
import Users from './Users/Users';
const AllRoutes = () => {
    return (
      <Routes>
          <Route path='/show' element={<Show/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/view' element={<ViewProduct/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/*' element={<Button/>}/>
      </Routes>
    )
  }
  export default AllRoutes;