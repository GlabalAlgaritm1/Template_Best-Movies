import React from 'react'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import PNF from './Pages/PNF'
import Home from './Pages/Home'
import Filmlar from './Pages/Filmlar'
import Seriallar from './Pages/Seriallar'
import Multfilmlar from './Pages/Multfilmlar'
import Anime from './Pages/Anime'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/filmlar' element={<Filmlar/>} />
          <Route path='/seriallar' element={<Seriallar/>} />
          <Route path='/multfilmlar' element={<Multfilmlar/>} />
          <Route path='/anime' element={<Anime/>} />

        </Route>
        <Route path='*' element={<PNF/>}/>
      </>
    ))
  return (
    <RouterProvider router={routes} />
  )
}

export default App