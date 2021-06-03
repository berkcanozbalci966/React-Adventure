import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeBook } from "../actions/index";

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  );
  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378; {totalPrice.toFixed(2)} </h3>
      {props.cart.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt="Simyacı" alt={book.name} />
          <div>
            <h4> {book.name} </h4>
            <p>Yazar: {book.author} </p>
            <p>Fiyat: &#8378; {book.price} </p>
            <button>-</button>
            <button onClick={() => props.removeBook(book.id)}>
              Sepetten Çıkar
            </button>
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { removeBook })(Cart);
