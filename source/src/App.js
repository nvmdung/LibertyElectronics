import './App.css';
import { useState, useEffect } from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Product from './components/ProductList';
// import Edit from './components/Edit';
// import Create from './components/Create';
// import Details from './components/Details';
// import Search from './components/Search';
import Home from './components/Home';
import Search from './components/Search';
import Ad from './components/Ad';
import Asus from './components/Asus';
import LaptopDetails from './components/LaptopDetails';
import DELL from './components/Dell';
import './css/Menu.css'

function App() {
  const [lavatars, setAvatars] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [filterLaptops, setFilerLaptops] = useState([])
  const [filterAvatars, setFilerAvatars] = useState([])
  const [value, setValue] = useState('');
  const [asusProduct, setAsusProduct] = useState([]);
  const [dellProduct, setDellProduct] = useState([]);
  const [laptopDetails, setLaptopDetails] = useState(null);
  
  useEffect(()=>{
    fetch('item.json')
    .then(response=>response.json())
    .then(data=>{
      const productdata1 = data;
      const productdata2 = data;
      setLaptops(data);
      setFilerLaptops(data);  
      setAsusProduct(productdata1.filter(p => p.brand == "Asus").slice(0,25));
      setDellProduct(productdata2.filter(p => p.brand == "DELL").slice(0,25));
    })
    .catch(error=>console.log('error reading json',error));
  },[]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const dataJson = await fetch('products.json');
        const laptopData = await dataJson.json();
        setLaptops(laptopData);
        setFilerLaptops(laptopData);
      }catch (error){
        console.log('error reading json');
      }
    };
    fetchData();
 
  const fetcData = async () => {
    try{
      const dataJson = await fetch('avatar.json');
      const avatarData = await dataJson.json();
      setAvatars(avatarData);
      setFilerAvatars(avatarData);
    }catch (error){
      console.log('error reading json');
    }
  };
  fetcData();
}, []);
  const handleSearch = (value) => {
    setValue(value);
    const filterLaptops = laptops.filter(d => d.name.toLowerCase().includes(value.toLowerCase()));
    setFilerLaptops(filterLaptops);
  }

  const handleAdd = (newLaptop) => {
    setLaptops([...laptops,newLaptop]);
    setFilerLaptops([...laptops,newLaptop]);
  }

  const handleDelete = (id) => {
    const deleted = filterLaptops.filter(laptop => laptop.id != id);
    
    setFilerLaptops(deleted);
  }

  // const handleEdit = (newLaptop) => {
  //   console.log(newLaptop);
  //   const index = laptops.findIndex((d) => d.id == newLaptop.id);
  //   if(!newLaptop.name){
  //     alert("Name is required");
  //   }else{
  //     laptops[index] = newLaptop;
  //   }
  // }

  // const handleSearch = (value) => {
  //   setValue(value);
  //   const filterLaptops = laptops.filter(d => d.name.includes(value))
  //   setFilerLaptops(filterLaptops);
  // }

  const getDetails = (pro) => {
    setLaptopDetails(pro);
  }
  
  return (
    <div className="App">
      <nav>
        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/product">product</Link>
        <div className='menu'>
          <button className='menubtn'>Menu</button>
          <div className='menu-content'>
        <Link to="/asus">Asus</Link>
        <Link to='dell'>DELL</Link>
        </div>
        </div>
        {/* <Link to="/create">Add new Laptop</Link> */}
      </nav>
      <Routes>
        <Route path="/home" element={<Home avatars={filterAvatars}/>}/>
        <Route path="/" element={<Ad />} />
        <Route path="/list" element={<List laptops={filterLaptops} onDelete={handleDelete} />}/>
        <Route path='/details' element={<LaptopDetails laptop={laptopDetails}/>}/>
        <Route path="/product" element={
          <div>
          <Search onSearch={handleSearch}/>
        <Product laptops={filterLaptops} getDetails={getDetails}/>
        </div>
      }/>
{/*         
        <Route path="/create" element={<Create onAdd={handleAdd}/>}/>
        <Route path="/details/:id" element={<Details/>}/> */}
        {/* <Route path="/edit/:id" element={<Edit onEdit={handleEdit}/>}/> */}
     dellProduct   <Route path='/asus' element={<Asus asusProduct={asusProduct}/>}/>
        <Route path='/dell' element={<DELL dellProduct={dellProduct}/>}/>
      </Routes>
    </div>
  );
}


export default App;

