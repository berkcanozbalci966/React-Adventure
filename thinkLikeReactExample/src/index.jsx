import React from "react";
import ReactDOM from "react-dom";

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const allProducts = this.props.products;

    const rows = [];
    let lastCategory = null;

    allProducts.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchProduct = this.searchProduct.bind(this);
    this.checkBoxControl = this.checkBoxControl.bind(this);
  }

  searchProduct(e) {
    this.props.handlerMethod(e.target.value);
  }

  checkBoxControl() {
    this.props.checkBoxMethod();
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.searchProduct}
          placeholder="Search..."
        />
        <p>
          <input
            checked={this.props.checkBoxValue}
            onChange={this.checkBoxControl}
            type="checkbox"
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "", checkBox: false };
    this.products = this.props.products;
    this.productHandler = this.productHandler.bind(this);
    this.searchbarHandler = this.searchbarHandler.bind(this);
    this.checkBoxToggle = this.checkBoxToggle.bind(this);
  }

  searchProduct({ text = this.state.searchInput, products }) {
    return text !== ""
      ? products.filter((item) => item.name.toLowerCase().includes(text))
      : products;
  }

  checkStock(products) {
    return products.filter((item) => item.stocked);
  }

  checkBoxToggle() {
    this.setState({ checkBox: !this.state.checkBox });
  }

  productHandler() {
    let output = this.state.checkBox
      ? this.searchProduct({
          products: this.checkStock(this.products),
        })
      : this.searchProduct({
          products: this.products,
        });

    return output;
  }

  searchbarHandler(productName) {
    this.setState({ searchInput: productName.toLowerCase() });
  }

  render() {
    return (
      <div>
        {this.state.searcInput}
        <SearchBar
          checkBoxValue={this.state.checkBox}
          handlerMethod={this.searchbarHandler}
          checkBoxMethod={this.checkBoxToggle}
        />
        <ProductTable products={this.productHandler()} />
      </div>
    );
  }
}

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);
