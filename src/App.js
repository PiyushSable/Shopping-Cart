import './App.css';
import {useState} from 'react';
import AppleWatch from './img/apple.png';
import AirPods from './img/airpods.jpg';
import AirTags from './img/airtag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [active, setactive] = useState("Products");

  let items = [];

  const [cartitems , setcartitems] = useState(items);

  const Cart = () => {

    let total = 0;

    cartitems.forEach(item => total += item.price);
    
    return(
      <div id="cartcontainer">
        <h2>Items in your cart</h2>
        
        <div id="checkoutitems">
        {cartitems.map(item => {
          return(
          <div className="itemdiv">
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
          </div>)
        })}
        <div id="finalamt">
          <b>Cart Value </b>
          <b>₹{total}</b>
        </div>

        <div id="checkoutbtn" onClick={() => alert("Project Done ")}>
          <b>Checkout &nbsp;</b> 
          <FontAwesomeIcon className="fonticons" icon={faArrowRight} size={"1x"}/>
        </div>
        </div>
      </div>
    )
  }

  const Products = () => {
    return (
    
    <div id="items">
      <div className="item">
        <img src={AppleWatch} alt="iPhone 11 Pro"/>
        <button className="price"><b>₹499900</b></button>
        <button className="addtocart" onClick={() => addtoCart("Apple Watch" , 499900)}>Add To Cart</button>
      </div>

      <div className="item">
        <img src={AirTags} alt="iPhone 11 Pro"/>
        <button className="price"><b>₹5000</b></button>
        <button className="addtocart" onClick={() => addtoCart("Air Tags" , 5000)}>Add To Cart</button>
      </div>

      <div className="item">
        <img src={AirPods} alt="iPhone 11 Pro"/>
        <button className="price"><b>₹25000</b></button>
        <button className="addtocart" onClick={() => addtoCart("Air Pods" , 25000)}>Add To Cart</button>
      </div>

    </div>
  )
  } 

  const addtoCart = (Product , Price) => {

    let item = {
      name : null , 
      price: 0
    };

    item.name = Product;
    item.price = Price;
    items.push(item);
    setcartitems(items);

    alert("Added to cart ✔");
  }

  return (
    <div className="App">

      <div id="topbar">
        <FontAwesomeIcon className="fonticons" icon={faHome} size={"2x"} onClick={() => setactive("Products")}/>
        <h1> Shopping Cart </h1> 
        <FontAwesomeIcon className="fonticons" icon={faShoppingCart} size={"2x"} onClick={() => setactive("Cart")}/>
      </div>

      {active === "Products" ? <Products/> : <Cart/>}
    </div>
  );
}

export default App;
