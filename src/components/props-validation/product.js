import PropTypes from 'prop-types';

const ProductProp = PropTypes.shape({
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

export default ProductProp;
