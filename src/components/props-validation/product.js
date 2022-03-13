import PropTypes from 'prop-types';

const productProp = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  reviews: PropTypes.number,
  rating: PropTypes.number,
  countStrings: PropTypes.number,
  cost: PropTypes.number,
  image: PropTypes.string,
  imageRetina: PropTypes.string,
});

export {
  productProp
};
