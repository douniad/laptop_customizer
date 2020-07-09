import React from 'react';
import CartTotal from '../CartTotal/CartTotal';
import Currency from '../Currency/Currency';

class CartSummary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          <Currency cost={selectedOption.cost} />
        </div>
      </div>
    );
  });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          <CartTotal selected={this.props.selected} />
          </div>
          </div>
      </section>
    )
  }
}

export default CartSummary;