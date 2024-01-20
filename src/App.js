// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import AddProductForm from "./components/AddProductForm"
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import SalesPage from "./components/SalesPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const[count,setCount]=useState(0)
  const [productList,setProductList]=useState([]);
  const [countproductqty,setProductQty]=useState()
  const handleProductAdd=(newProduct)=>{
    setProductList((prevList)=>[...prevList,newProduct])
  }
  return (
    <Router>
        <NavigationBar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/AddProductForm" element={<AddProductForm onAddproduct={handleProductAdd} setCount={setCount} count={count} setProductQty={setProductQty}/>}/>
            <Route path="/SalesPage" element={<SalesPage productList={productList} setProductList={setProductList} count={count} setCount={setCount} countproductqty={countproductqty}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
