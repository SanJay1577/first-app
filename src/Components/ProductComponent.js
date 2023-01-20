import { useContext, useState } from "react"
import { Button, Card } from "react-bootstrap";
import { data } from "../data"
import './productComponent.css'

export function ProductComponent (){
    const [card, setCard] = useState(data);
    const [item, setItems] = useState(0);

    return (
        <div>
            <h1>Apple Product Store </h1>
            <span>Cart {item}</span>
        <div className="product-data">
           {card.map((prod, idx)=> (
           <CardDetails
            key = {idx}
            prodPrice ={prod.prodPrice}
            prodDescription = {prod.prodDescription}
            prodImage = {prod.prodImage}
            prodName = {prod.prodName}
            prodRating = {prod.prodRating}
            idx = {idx}
            setItems = {setItems}
            setCard = {setCard}
            item ={item}
            card ={card}
           />
           ))}
    
        </div>
        </div>
    )
}


function CardDetails ({setCard, setItems, prodPrice, prodDescription, prodImage, prodName, prodRating, idx , item}) {
   let count = 0
    const [showBtn, setShowBtn] = useState(true);
    const handleCartAdd = (idx, setItems, item) => {
        setShowBtn(!showBtn)
        setItems(item + 1)
        
        
    }
    const handleCartRemove = (idx, setItems , item, setCard) =>{
       setShowBtn(!showBtn)
       setItems(item - 1)
      ///
    }

    return(
    <Card style={{ width: '18rem', padding: "10px"}}>
    <Card.Img variant="top" src={prodImage} />
    <Card.Body>
      <Card.Title>{prodName}</Card.Title>
      <p className="price-cart">RS. {prodPrice}</p>
      <p className="rating-data">{prodRating}❤️</p>
      <Card.Text>
        {prodDescription}
      </Card.Text>
    </Card.Body>
    <div className="btn-area">
        {showBtn ? <Button onClick={()=>handleCartAdd(idx, setItems, item)} variant="primary">Add</Button>: 
         <Button onClick={()=>handleCartRemove(idx, setItems, item , setCard)} variant="secondary">Remove </Button>  }
    </div>
  </Card>
    )

}
