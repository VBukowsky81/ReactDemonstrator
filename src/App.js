import React from "react";
import "./App.css";
import ProductForm from "./ProductForm";
import Total from "./Total";

let productList = [
  { name: "CPU", price: 300, info: "Intel, AMD" },
  { name: "Motherboard", price: 180, info: "ASUS, Gigabyte, MSI" },
  { name: "RAM", price: 110, info: "Corsair, Intel" }
];

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
  }

  showInfo() {
    this.props.handleShow(this.props.info);
  }

  render() {
    return (
      <div>
        <div className="row form-group">
          <div className="col-sm-10">
            <h4>
              {this.props.name}: ${this.props.price}
            </h4>
          </div>
          <div className="col-sm-2 text-right">Quantity: {this.state.qty}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-6">
            <button className="btn btn-outline-primary" onClick={this.showInfo}>
              Show Notes
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-outline-primary" onClick={this.add}>
              +1
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={this.subtract}
              disabled={this.state.qty < 1}
            >
              -1
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

class HardwareShopping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

    this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product)
    });
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }

  showProduct(info) {
    console.log(info);
    alert(info);
  }

  render() {
    if (!this.state.productList) return <p>Loading, please wait...</p>;

    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Item
          name={product.name}
          price={product.price}
          info={product.info}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div>
        <ProductForm handleProduct={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default HardwareShopping;
