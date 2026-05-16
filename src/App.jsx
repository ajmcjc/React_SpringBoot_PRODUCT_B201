import './App.css'
import ViewProducts from './Components/ViewProducts'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './Components/AddProduct'
import Footer from './Components/Footer'
import Update from './Components/Update'

function App() {
  
  return (
    <>
      <BrowserRouter>
         <Header/>

         <Routes>
          <Route path='/addproduct' element={<AddProduct/>}></Route>
          <Route path='/viewproducts' element={<ViewProducts/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
         </Routes>
      </BrowserRouter>
     
      {/* <h1>Axios Library</h1> */}
      
      <Footer/>
    </>
  )
}

export default App
