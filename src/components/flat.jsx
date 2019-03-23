import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, index } = this.props;

    selectFlat(index);
  }

  render() {
    const {
      name,
      imageUrl,
      price,
      priceCurrency,
      selected
    } = this.props;

    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    };
    return (
      <div className={`card${selected ? ' active' : ''}`} style={styles}>
        <div className="card-category">
          {price}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
