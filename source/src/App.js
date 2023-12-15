import './App.css';
import { useState, useEffect } from 'react';
import {  Route, Routes, useNavigate,Navigate } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/ProductList';
import './css/Sort.css'
import './css/Asuscontainer.css'
import Menu from './components/Menu.js';
import Button from './components/Button.js';
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
import AsusVideo from './components/Asusstyle/Asusvideo.js';
import Msi from './components/brand/Msi';
import GIGABYTE from './components/brand/Gigabyte';
import Lenovo from './components/brand/Lenovo';
import WavingSanta from './components/Noelami.js'
import Footer from './components/Footer.js';
import Register from './components/Register.js';
import CardASUS from './components/Asusstyle/CardAsus.js';
import MsiCard from './components/MsiStyle/CardMsi.js';
import Gaminglaptop from './components/Gaminglaptop.js';
import Officelaptop from './components/Office.js';
import DELLCard from './components/Dellstyle/CardDELL.js';
import GIGABYEcarD from './components/GIGABYTESTYE/gigabyte.js';
import Lenovocard from './components/Lenovostyle/Cardlenovo.js';
import HP from './components/brand/HP.js';
import HPcard from './components/HPstyle/hpstyle.js';

import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogDetailsMSI from './components/BlogDetailsMSI';
import BlogDetailsGIGABYTE from './components/BlogDetailsGIGABYTE';
import BlogDetailsDELL from './components/BlogDetailsDELL';
import BlogDetailsHP from './components/BlogDetailsHP';
import BlogDetailsLENOVO from './components/BlogDetailsLENOVO';
import BlogDetailsASUS from './components/BlogDetailsASUS';
import About from './components/About';

import LenovoVideo from './components/Lenovostyle/Lenovovideo.js';
import MsiVideo from './components/MsiStyle/Msivideo.js';
import GigabyteVideo from './components/GIGABYTESTYE/gigabytevideo.js';
import DellVideo from './components/Dellstyle/Dellvideo.js';
import HpVideo from './components/HPstyle/HPvideo.js';
function App() {
  const [users,setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [avatarLaptopsAsus, setAvatarLaptopsAsus] = useState([]);
  const [avatarLaptopsLenovo, setAvatarLaptopsLenovo] = useState([]);
  const [avatarLaptopsGigabyte, setAvatarLaptopsGigabyte] = useState([]);
  const [avatarLaptopsMSI, setAvatarLaptopsMSI] = useState([]);
  const [avatarLaptopsHP, setAvatarLaptopsHP] = useState([]);
  const navigate=useNavigate();
  const [laptops, setLaptops] = useState([]);
  const [filterLaptops, setFilerLaptops] = useState([])
  const [value, setValue] = useState('');
  const [asusProduct, setAsusProduct] = useState([]);
  const [dellProduct, setDellProduct] = useState([]);
  const [msiProduct, setMsiProduct] = useState([]);
  const [gigabyteProduct, setGigabyteProduct] = useState([]);
  const [lenovoProduct, setLenovoProduct] = useState([]);
  const [HpProduct, setHpProduct] = useState([]);
  const [laptopDetails, setLaptopDetails] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [carts, setCarts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  
  useEffect(()=>{
    fetch('item.json')
    .then(response=>response.json())
    .then(data=>{
      const productdata1 = data;
      const productdata2 = data;
      const productdata3 = data;
      const productdata4 = data;
      const productdata5 = data;
      const productdata6 = data;
      setLaptops(data);
      setFilerLaptops(data);
      setAsusProduct(productdata1.filter(p => p.brand == "Asus").slice(0,25));
      setDellProduct(productdata2.filter(p => p.brand == "DELL").slice(0,25));
      setMsiProduct(productdata3.filter(p => p.brand == "MSI").slice(0,25)); 
      setGigabyteProduct(productdata4.filter(p => p.brand == "GIGABYE").slice(0,25)); 
      setLenovoProduct(productdata5.filter(p => p.brand == "Lenovo").slice(0,25)); 
      setHpProduct(productdata6.filter(p => p.brand == "HP").slice(0,25)); 
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
        setAvatarLaptopsAsus(laptopData1.filter(p => p.brand == "Asus"))
        setAvatarLaptopsLenovo(laptopData2.filter(p => p.brand == "Lenovo"))
        setAvatarLaptopsGigabyte(laptopData3.filter(p => p.brand == "GIGABYE"))
        setAvatarLaptopsMSI(laptopData4.filter(p => p.brand == "MSI"))
        setAvatarLaptopsHP(laptopData5.filter(p => p.brand == "HP"))
        
      }catch (error){
        console.log('error reading json');
      }
    };
    fetchData();
 
  const fetcData = async () => {
    try{
      const dataJson = await fetch('user.json');
      const userData = await dataJson.json();
      setUsers(userData);
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
    const Finduser = users.find(u => u.username==checkUser.username && u.password==checkUser.password );
    if(Finduser != null){
      console.log("Login success");
      navigate('/');
      localStorage.setItem('username',checkUser.username)
    }else{
      navigate('/login');
      // setErrorlogin("Wrong password or pass");
    }
  }
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
  const handlePaymentData = (paymentData) => {
    setCarts([]);
    navigator('/products');
  }
  const sendqtyDetail = (newProd) => {
    console.log("newProdQty", newProd.quantity);
    const existingProduct = carts.find(item => item.id === newProd.id);
    //kiểm tra giỏ hàng có sản phẩm nào có trùng id với newProd.id 
    if (existingProduct) {
      //nếu trùng thì giỏ hàng có sản phẩm trùng id với newProd id  thì số lượng của item có trong giỏ hàng đó + thêm số lượng từ newProd
      const updatedCart = carts.map(item => item.id == newProd.id ? { ...item, quantity: item.quantity + newProd.quantity } : item);
      //sau đó cập nhật lại giỏ hàng
      setCarts(updatedCart);
    } else {
      //nếu ko có sản phẩm nào tồn tại thì sẽ add thẳng newProd vào giỏ hàng
      setCarts([...carts, { ...newProd }])
    }
  }
  const addCart = (product) => {
    const existingProduct = carts.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCarts(updatedCart);
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };
  //************************************ DECREASE QUANTITY CART ************************************
  const decreaseQuantity = (product) => {
    const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item);
    const filteredCart = updatedCart.filter(item => item.quantity > 0);
    setCarts(filteredCart);
  }
  //************************************ INCREASE QUANTITY CART ************************************
  const increaseQuantity = (product) => {
    const maxQtyProd = laptops.find(item => item.id == product.id);
    if (product.quantity < maxQtyProd.quantity) {
      const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: Math.max(item.quantity + 1, 0) } : item);
      setCarts(updatedCart);
    }
  }
  //************************************  DELETE CART   ************************************ 
  const deleteCart = (product) => {
    const deletedCarts = carts.filter(item => item.id !== product.id);
    setCarts(deletedCarts);

  }

  const handleDeleteCart = (id) => {
    const DeleteCart = carts.filter(c => c.id !== id);
    setCarts(DeleteCart);
  }
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered('./image/banner/right.png');
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleSortByBrand = (brand) => {
    let updatedSelectedBrands;

    if (selectedBrands.includes(brand)) {
      // If brand is already selected, remove it
      updatedSelectedBrands = selectedBrands.filter((selectedBrand) => selectedBrand !== brand);
    } else {
      // If brand is not selected, add it
      updatedSelectedBrands = [...selectedBrands, brand];
    }

    // Apply filters based on selected brands
    let filteredProducts = [...laptops];

    if (updatedSelectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        updatedSelectedBrands.includes(product.brand)
      );

      setFilerLaptops(filteredProducts);
      setSelectedBrands(updatedSelectedBrands);
    };    }

    const validate = () => {
      let isValid = true;
      let newErrors = {};
  
      if (!input['username']) {
        isValid = false;
        newErrors['username'] = 'Please enter your username.';
      } else if (input['username'].length < 6) {
        isValid = false;
        newErrors['username'] = 'Username must be at least 6 characters long.';
      }
  
      if (!input['email']) {
        isValid = false;
        newErrors['email'] = 'Please enter your email address.';
      } else {
        // Simple email format validation using a regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input['email'])) {
          isValid = false;
          newErrors['email'] = 'Please enter a valid email address.';
        }
      }
    
      setErrors(newErrors);
      return isValid;
    };
  
  
  return (   
    <div className="App">
      
      <Menu/><br/>
      
        <nav className="menu123">
 
        {/* <Link to="/create">Add new Laptop</Link> */}
      </nav>
      <Routes>
     
     <Route path="/" element={
          
          <Home avatarLaptopsAsus={avatarLaptopsAsus}
                avatarLaptopsLenovo={avatarLaptopsLenovo}
                avatarLaptopsGigabyte={avatarLaptopsGigabyte}
                avatarLaptopsHP={avatarLaptopsHP}
                avatarLaptopsMSI={avatarLaptopsMSI}
                laptops={filterLaptops} addCart={addCart}
                getDetails={getDetails}
              /> 
      }/>
       <Route path="/gaming" element={          
          <Gaminglaptop avatarLaptopsAsus={avatarLaptopsAsus}
                avatarLaptopsLenovo={avatarLaptopsLenovo}
                avatarLaptopsGigabyte={avatarLaptopsGigabyte}
                avatarLaptopsHP={avatarLaptopsHP}
                avatarLaptopsMSI={avatarLaptopsMSI}
                laptops={filterLaptops} addCart={addCart}
                getDetails={getDetails}
             />}/>
      <Route path="/office" element={          
          <Officelaptop avatarLaptopsAsus={avatarLaptopsAsus}
                avatarLaptopsLenovo={avatarLaptopsLenovo}
                avatarLaptopsGigabyte={avatarLaptopsGigabyte}
                avatarLaptopsHP={avatarLaptopsHP}
                avatarLaptopsMSI={avatarLaptopsMSI}
                laptops={filterLaptops} addCart={addCart}
                getDetails={getDetails}
             />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/details' element={<LaptopDetails laptop={laptopDetails} addCart={addCart} sendqtyDetail={sendqtyDetail}/>}/>
       
        <Route path="/product" element={
           localStorage.getItem('registeredUser') ? (
        <div>       
         <div className='container-product'>
          <Button/>
         <Search onSearch={handleSearch}/>
         <div className='container-sort'>
       <div className='sort'>
       <button className='sort-price' onClick={handleSortByPrice}>
     Sort by Price {sortOrder === 'asc' ? '↑' : '↓'}
   </button>
   <button className='sort-price' onClick={() => handleSortByBrand('Asus')}>Asus</button>
   <button className='sort-price' onClick={() => handleSortByBrand('DELL')}>DELL</button>
   <button className='sort-price' onClick={() => handleSortByBrand('GIGABYE')}>GIGABYE</button>
   <button className='sort-price' onClick={() => handleSortByBrand('Lenovo')}>LENOVO</button>
   <button className='sort-price' onClick={() => handleSortByBrand('HP')}>HP</button>
   <button className='sort-price' onClick={() => handleSortByBrand('MSI')}>MSI</button>
       </div>
       </div>
     <Product laptops={filterLaptops} addCart={addCart} getDetails={getDetails}/>
     <div className='container-satan'>
     <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/><WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/>  <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/>   <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/> <WavingSanta imagePath="../image1/satan.png"/>
         </div>   
     </div>
     </div>) : (<Navigate to="/login"/>)}/>
          {/*         
     <Route path="/create" element={<Create onAdd={handleAdd}/>}/>
     <Route path="/details/:id" element={<Details/>}/> */}
     {/* <Route path="/edit/:id" element={<Edit onEdit={handleEdit}/>}/> */}
     
     
      <Route path='/asus' element={
        

        <div className='asus-container1'>
          <Button/>
          
          <Button/>   <AsusVideo/> <CardASUS/>  <Asus asusProduct={asusProduct} addCart={addCart} getDetails={getDetails}/>
           
          
      </div>}/>
      <Route path='/msi' element={
        <div className='msi-container1'>
          
          <Button/>
          
          <Button/>  <MsiVideo/>    <MsiCard/><Msi msiProduct={msiProduct} addCart={addCart} getDetails={getDetails}/>
      </div>}/>
        <Route path='/dell' element=
        {
          <div className='dell-container1'>
              <Button/>
          
          <Button/> 
          <DellVideo/>
            <DELLCard/>
        <DELL dellProduct={dellProduct} addCart={addCart} getDetails={getDetails} />
        </div>
        }/>
        <Route path='/gigabyte' element={
          <div className='gigabyte-container1'>
               <Button/>
          
          <Button/> 
          <GigabyteVideo/>
          <GIGABYEcarD/>
         
       
        <GIGABYTE gigabyteProduct={gigabyteProduct} addCart={addCart} getDetails={getDetails}/>
        </div>
        }/>
        <Route path='/lenovo' element={
          <div className='lenovo-container1'>
              <Button/>
          
          <Button/> 
          <LenovoVideo/>
            <Lenovocard/>
        <Lenovo lenovoProduct={lenovoProduct} addCart={addCart} getDetails={getDetails}/>
        </div>
        }/>
            <Route path='/hp' element={
          <div className='hp-container1'>
              <Button/>
          
          <Button/> 
          <HpVideo/>
           <HPcard/>
        <HP HpProduct={HpProduct} addCart={addCart} getDetails={getDetails}/>
        </div>
        }/>
        <Route path='/cart' element={<CartList carts={carts} deleteCart={deleteCart} decreaseQty={decreaseQuantity} increaseQty={increaseQuantity} handlePaymentData={handlePaymentData}/>}/>
        <Route path="/login" element={<>
                            <Login  setShowModal={setShowModal} errorlogin="Error message" />
                            {showModal && (
                                <div className="modal">
                                    Error login
                                </div>
                            )}
                        </>}/>
                        
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blogs" element={<Blog />}/>
        <Route path="/blogs/msi" element={<BlogDetailsMSI />}/>
        <Route path="/blogs/gigabyte" element={<BlogDetailsGIGABYTE />}/>
        <Route path="/blogs/lenovo" element={<BlogDetailsLENOVO />}/>
        <Route path="/blogs/dell" element={<BlogDetailsDELL />}/>
        <Route path="/blogs/hp" element={<BlogDetailsHP />}/>
        <Route path="/blogs/asus" element={<BlogDetailsASUS />}/>
        <Route path="/about" element={<About/>}/>                  
      </Routes>
      <footer><Footer/></footer>
    </div>
  );
}


export default App;

