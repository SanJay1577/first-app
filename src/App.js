import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartData } from './CartData';
 import { StateLessComponent } from './StateLessComponent';

const data = [
  {
    name :"apple",
    details:"fruits",
    clr:"whitesmoke",
  },
  {
    name :"carrot",
    details:"vegetables",
    clr:"brown",
  },
  {
    name :"chocolate",
    details:"junk",
    clr:"green",
  }
]

function App() {

  //updating my states 
const [cart, setCart] = useState(data)

// let state = "sanjayn"
// state = "sethu"

  return (
    <div className="App">
      {/* <div>
        {cart.map((item, idx)=>( 
        <SampleCard 
        key={idx}
        name={item.name}
         details={item.details}
          clr={item.clr}

           /> 
          ))}

    <div>Cart {cart.length} </div>
    </div>
    */}


      <CartData/>
    
    <StateLessComponent name="Componenet"/>

    </div>

  );
}

export default App;

function SampleCard (props) {

 const [show, setShow] = useState(false); 

  const handleClick = () =>{
   setShow(!show)
  }
  const describeStyle = { 
    display : show ? "block" :"none" 
  
  }


  return (
    <div style={{backgroundColor:props.clr}}className='card-content'>
      <p>Card name : {props.name}</p>

      {/* conditional rendering */}
      {/* {show ? <p>Card Details: {props.details}</p> : ""} */}

      {/* conditional styling  */}
      {/* <p style={describeStyle}>Card Details: {props.details}</p> */}

      <p>Card Details: {props.details}</p>

      <button style={{display : !show ? "block" : "none"}} onClick={()=>{handleClick()}} >Add</button>
      <button style={{display : show ? "block" : "none"}} onClick={()=>{handleClick()}} >Remove </button>
    </div> 
  )
}

//// new commit added

// right ways 
// const name = ()=>{handleClick()}
// onclick={handleClick}


// Working with array lists
// Usage of keys ()
// Conditional rendering plus styling
// Handling Events
// Props vs state

//key is a unique identity for a component 


//Components ,
// componets lifeccyle - not seen
//state and sateless
// resulable 
//passing dynamic data to the components


export const prodData = [
  {
    prodName : "FancyProduct1",
    price :"40 -80"
  },
  {
    prodName : "FancyProduct2",
    price :"40 -80"
  },
  {
    prodName : "FancyProduct3",
    price :"40 -80"
  },
  {
    prodName : "FancyProduct4",
    price :"40 -80"
  },
]



