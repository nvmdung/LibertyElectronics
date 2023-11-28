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

function App() {
  const [lavatars, setAvatars] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [filterLaptops, setFilerLaptops] = useState([])
  const [filterAvatars, setFilerAvatars] = useState([])
  const [value, setValue] = useState('');

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
  
  return (
    <div className="App">
      <nav>
        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/product">product</Link>
        {/* <Link to="/create">Add new Laptop</Link> */}
      </nav>
      <Routes>
        <Route path="/home" element={<Home avatars={filterAvatars}/>}/>
        <Route path="/" element={<Ad />} />
        <Route path="/list" element={<List laptops={filterLaptops} onDelete={handleDelete}/>}/>
        <Route path="/product" element={
          <div>
          <Search onSearch={handleSearch}/>
        <Product laptops={filterLaptops}/>
        </div>
      }/>
{/*         
        <Route path="/create" element={<Create onAdd={handleAdd}/>}/>
        <Route path="/details/:id" element={<Details/>}/> */}
        {/* <Route path="/edit/:id" element={<Edit onEdit={handleEdit}/>}/> */}
        
      </Routes>
    </div>
  );
}


export default App;

