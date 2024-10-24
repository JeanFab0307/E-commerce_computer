
import PropTypes from 'prop-types';

export const ProductItemShape = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  richDescription: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  brand: PropTypes.string,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  countInStock: PropTypes.number.isRequired,
  rating: PropTypes.number,
  numReviews: PropTypes.number,
  isFeatured: PropTypes.bool,
  // dateCreated: PropTypes.instanceOf(Date),
  cpu: PropTypes.string.isRequired,
  gpu: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  motherboard: PropTypes.string.isRequired,
  psu: PropTypes.string.isRequired,
  coolingSystem: PropTypes.string,
  dimensions: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
};
