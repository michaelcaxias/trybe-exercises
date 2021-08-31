import React from 'react';
import PropTypes from 'prop-types';  

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.data;
    return (
      <div className="pokemon">
        <div>
          <h2>{ name }</h2>
          <p>{ type }</p>
          <p>{ `${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
        </div>
        <div>
          <img  className="pokemon-img" src={ image } alt="imagem"/>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string
  }),
  image: PropTypes.string
};


export default Pokemon