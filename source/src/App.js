import './App.css';
import { useState, useEffect } from 'react';
import './css/Home.css'
import './css/Header.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/ProductList';
import './css/Sort.css'
// import Edit from './components/Edit';
// import Create from './components/Create';
// import Details from './components/Details';
import Home from './components/Home';
import Search from './components/Search';
import Asus from './components/brand/Asus';
import LaptopDetails from './components/LaptopDetails';
import DELL from './components/brand/Dell';
import CartList from './components/CartList';
import './css/Menu.css'
import AsusVideo from './components/video/video';
import Msi from './components/brand/Msi';
import GIGABYTE from './components/brand/Gigabyte';
import Lenovo from './components/brand/Lenovo';
import WavingSanta from './components/Noelami.js'

function App() {
  const [users,setUsers] = useState([]);
  const [avatarLaptopsAsus, setAvatarLaptopsAsus] = useState([]);
  const [avatarLaptopsLenovo, setAvatarLaptopsLenovo] = useState([]);
  const [avatarLaptopsGigabyte, setAvatarLaptopsGigabyte] = useState([]);
  const [avatarLaptopsMSI, setAvatarLaptopsMSI] = useState([]);
  const [avatarLaptopsHP, setAvatarLaptopsHP] = useState([]);
  const navigate=useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [filterLaptops, setFilerLaptops] = useState([])
  const [filterAvatars, setFilerAvatars] = useState([])
  const [value, setValue] = useState('');
  const [asusProduct, setAsusProduct] = useState([]);
  const [dellProduct, setDellProduct] = useState([]);
  const [msiProduct, setMsiProduct] = useState([]);
  const [gigabyteProduct, setGigabyteProduct] = useState([]);
  const [lenovoProduct, setLenovoProduct] = useState([]);
  const [laptopDetails, setLaptopDetails] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [carts, setCarts] = useState([]);
  
  
  useEffect(()=>{
    fetch('item.json')
    .then(response=>response.json())
    .then(data=>{
      const productdata1 = data;
      const productdata2 = data;
      const productdata3 = data;
      const productdata4 = data;
      const productdata5 = data;
      setLaptops(data);
      setFilerLaptops(data);
      setAsusProduct(productdata1.filter(p => p.brand == "Asus").slice(0,25));
      setDellProduct(productdata2.filter(p => p.brand == "DELL").slice(0,25));
      setMsiProduct(productdata3.filter(p => p.brand == "MSI").slice(0,25)); 
      setGigabyteProduct(productdata4.filter(p => p.brand == "GIGABYE").slice(0,25)); 
      setLenovoProduct(productdata5.filter(p => p.brand == "Lenovo").slice(0,25)); 
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
        const laptopData1 = laptopData;
        const laptopData2 = laptopData;
        const laptopData3 = laptopData;
        const laptopData4 = laptopData;
        const laptopData5 = laptopData;
        setAvatarLaptopsAsus(laptopData1.filter(p => p.brand == "Asus").slice(0,4))
        setAvatarLaptopsLenovo(laptopData2.filter(p => p.brand == "Lenovo").slice(0,2))
        setAvatarLaptopsGigabyte(laptopData3.filter(p => p.brand == "GIGABYE").slice(0,2))
        setAvatarLaptopsMSI(laptopData4.filter(p => p.brand == "MSI").slice(0,2))
        setAvatarLaptopsHP(laptopData5.filter(p => p.brand == "HP").slice(0,2))
        
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
  const checkLogin = (checkUser) =>{
    const Finduser = users.find(u => u.username==checkUser.username && u.password==checkUser.password);
    if(Finduser != null){
      console.log("Login success");
      navigate('/');
      localStorage.setItem('username',checkUser.username)
    }else{
      console.log("Login Fail");
      navigate('/login');
      // setErrorlogin("Wrong password or pass");
    }
  }
   const DeletelocalStorage = () => {
    localStorage.clear()
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
  const handleSort = () => {
    const sortedProduct =[...filterLaptops].sort((a,b) => a.name.localeCompare(b.name));
    setFilerLaptops(sortedProduct);
  }
  const handleSortByPrice = () => {
    const sortedProduct = [...filterLaptops].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilerLaptops(sortedProduct);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }
  const addCart = (pro) => {
    setCarts([...carts, pro]);
  }

  const handleDeleteCart = (id) => {
    const DeleteCart = carts.filter(c => c.id !== id);
    setCarts(DeleteCart);
  }
 
  
  
  
  return (
    
    <div className="App">
      <nav>
        <Link className="header" to="/">Home</Link>
        <Link className="header" to="/product">Product</Link>
        <Link className="header" to="/about">About us</Link>
        <Link className="header" to="/contact">Contact us</Link>
        <Link className="header" to="/blog">Blog</Link>
        <div className='menu'>
          <button className='menubtn'>Menu</button>
          <div className='menu-content'>
        <Link to="/asus">Asus</Link>
        <Link to='msi'>MSI</Link>
        <Link to='dell'>DELL</Link>
        <Link to='gigabyte'>GIGABYTE</Link>
        <Link to='lenovo'>LENOVO</Link>
        </div>
        </div>
        <Link className="header1" to="/cart">Cart</Link>
        {localStorage.getItem('username') ?
        (<span>
          Hello {localStorage.getItem('username')},
        <Link className="header1" to="/login" onClick={()=> DeletelocalStorage()}>
          Logout
        </Link>
        </span>) :
        (<Link className="header1" to="/login">Login</Link>)
}
        {/* <Link to="/create">Add new Laptop</Link> */}
      </nav>
      <Routes>
     
     <Route path="/" element={
          <div>
          <Home avatarLaptopsAsus={avatarLaptopsAsus}
                avatarLaptopsLenovo={avatarLaptopsLenovo}
                avatarLaptopsGigabyte={avatarLaptopsGigabyte}
                avatarLaptopsHP={avatarLaptopsHP}
                avatarLaptopsMSI={avatarLaptopsMSI}
              />
        </div>
      }/>
        <Route path='/details' element={<LaptopDetails laptop={laptopDetails} addCart={addCart}/>}/>
        <Route path="/product" element={
          <div>
          <Search onSearch={handleSearch}/>
          <div className='container-satan'>
            <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/>   <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/>
            </div>
            <div>
              <tr>
                <td><button onClick={() => {
                  navigate('/asus');
                }}>ASUS</button></td>
                <td><button onClick={()=>{
                  navigate('/lenovo');
                }}>LENOVO</button></td>
                <td><button>MSI</button></td>
                <td><button>GIGABYE</button></td>
                <td><button>HP</button></td>
                <td><button>DELL</button></td>
              </tr>
            </div>
            <div className='container-sort'>
          <div className='sort'>
            <button className='btn-sort'>Sort</button>
            <div className='sort-content'>
          <button className='sort-price' onClick={handleSortByPrice}>
        Sort by Price {sortOrder === 'asc' ? '↑' : '↓'}
      </button>
          <button className='sort-name' onClick={handleSort}>Sort By Name</button>
          </div>
          </div>
          </div>
        <Product laptops={filterLaptops} addCart={addCart} getDetails={getDetails}/>
        </div>
      }/>
{/*         
        <Route path="/create" element={<Create onAdd={handleAdd}/>}/>
        <Route path="/details/:id" element={<Details/>}/> */}
        {/* <Route path="/edit/:id" element={<Edit onEdit={handleEdit}/>}/> */}
        
      <Route path='/asus' element={
        <div>
            <AsusVideo/>
            <Asus asusProduct={asusProduct}/>
      </div>}/>
      <Route path='/msi' element={<Msi msiProduct={msiProduct}/>}/>
        <Route path='/dell' element={<DELL dellProduct={dellProduct}/>}/>
        <Route path='/gigabyte' element={<GIGABYTE gigabyteProduct={gigabyteProduct}/>}/>
        <Route path='/lenovo' element={<Lenovo lenovoProduct={lenovoProduct}/>}/>
        <Route path='/cart' element={<CartList carts={carts} deleteCart={handleDeleteCart}/>}/>
        <Route path="/login" element={<Login checkLogin={checkLogin}/>}/>
      </Routes>
    </div>
  );
}


export default App;

