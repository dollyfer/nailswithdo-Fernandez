import React, {useState} from "react";
import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";


const ItemDetail = (props) => {

  const [isBought, setIsBought] = useState(true);
  const [itemsComprados, setItemsComprados] = useState(0);

  const changeBoolean = (counter) => {
    console.log(counter);
    setIsBought(false);
    changeItemsComprados(counter);
  };

  const changeItemsComprados = (counter) => {
    setItemsComprados(counter);
  };

  const carrito = (
    <Link to="/carrito">
      <button>Ir al Carrito</button>
    </Link>
  );

  return (
    <div>
      <div>Title: {props.product.title}</div>
      <img src={props.product.image} alt= "imagenProducto"></img>
      <div>Price: {props.product.price}</div>
      <div>Description: {props.product.description}</div>
      <div>Category: {props.product.category}</div>
      <div>Items agregados: {itemsComprados}</div>

      {isBought ? (
        <ItemCounter changeBoolean={changeBoolean}></ItemCounter>
      ) : (
        carrito
      )}
    </div>
  );
};

export default ItemDetail;
