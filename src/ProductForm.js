import React from "react";

class ProductForm extends React.Component {
  submit(e) {
    e.preventDefault();
    var product = {
      name: this.refs.name.value,
      price: Number(this.refs.price.value),
      info: this.refs.info.value
    };
    console.log(this.refs.name.value, this.refs.price.value);
    this.props.handleProduct(product);
    this.refs.name.value = "";
    this.refs.price.value = 0;
    this.refs.info.value = "";
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <h3>Add New Item</h3>
        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">Item Name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              ref="name"
              placeholder="e.g. Graphics Card"
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">Price:</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              ref="price"
              placeholder="e.g. 100"
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">Notes:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              ref="info"
              placeholder="e.g. optional "
            />
          </div>
        </div>

        <div className="row form-group">
          <div className="offset-2 col-10">
            <button className="btn btn-outline-primary">Create Item</button>
          </div>
        </div>

        <hr />
      </form>
    );
  }
}

export default ProductForm;
