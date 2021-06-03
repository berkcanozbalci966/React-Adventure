import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBasket } from "../actions/index";

const Products = (props) => {
  console.log("Product Component", props);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book, index) => (
        <div key={index} className="book">
          <img src={book.image} alt="Simyaci" />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price} </p>
            <button onClick={() => props.addBasket(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  };
};

export default connect(mapStateProps, { addBasket })(Products);
