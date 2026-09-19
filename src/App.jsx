import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import BasicLayout from './layouts/BasicLayout'
import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'
import NotFound from './pages/NotFound'


const router = createBrowserRouter([
  {
   path: '/',  element: <BasicLayout/>,
   children: [
     {
      index: true,
      element: <HomePage/>
     },
     {
      path: '/movie/:id',
      //element: <Animal/>
     },  
     {
      path: '/favorite',
      element: <FavoritePage/>
     }
   ]
  },
  {
   path: '*',
   element: <NotFound />
  }
])


function App() {

  return ( 
    <RouterProvider router={router} />   
  ); 
}

export default App
