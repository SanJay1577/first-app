import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { prodData } from './App';
import { StateLessComponent } from './StateLessComponent';

export function CartData() {

  // use our states 
  const [newData, setNewData] = useState(prodData);
  const [selected, setSelected] = useState("")

  const handleAddFunction = (id) =>{
      const productName = newData[id].prodName; 
      setSelected(productName)
  }


  const handleRemove = (id) => {
    //
    console.log("clciked remove", id);
    console.log(newData);
    const removedCart = newData.filter((val, idx) => idx != id);
    setNewData(removedCart);
  };

  return (
    <div className='main-sample'>

      <div className='prod-div'>

        {newData.map((prod, idx) => (
          <div className='card-content' key={idx}>
            <div>Name : {prod.prodName}</div>
            <div>Price : {prod.price}</div>
            <button onClick={()=>handleAddFunction(idx)}>Add</button>
            <Button variant="secondary" onClick={() => handleRemove(idx)}>Remove</Button>
          </div>
        ))}
      </div>

      <div>
        Selected Product : {selected}
      </div>

      <div className='card-count'>
        cart {newData.length}
        <StateLessComponent name="In a differnt componet"/>
      </div>

    </div>
  );
}
