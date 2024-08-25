import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import Products from './components/Products'
import Customer from './components/Customer'
import NotFound from './components/NotFound'
import NewCustomer from './components/NewCustomer'
import NewProducts from './components/NewProducts'
import CreateOrder from "./components/OrderForm"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<Homepage /> } />
          <Route path='/customers' element={<Customer /> } />
          <Route path='/products' element={<Products /> } />
          <Route path='/addcustomers' element={<NewCustomer />} />
          <Route path='/addproduct' element={<NewProducts />} />
          <Route path='/order' element={<CreateOrder />} />
          <Route path='*' element={<NotFound /> } />       
      </Routes>
    </>
  )
}

export default App