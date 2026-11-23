import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LaptopCard({
  name = "Unknown Laptop",
  price = 0,
  image,
  onCompare
}) {
  return (
    <div className="card">
      <img className="image" src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: &#8377;{price}</p>
      <Link to={`/laptop/${name}`} className="details-btn">View Details</Link>
      {onCompare && (
  <button className="compare-btn" onClick={onCompare}>
    Compare
  </button>
)}
    </div>
  );
}

LaptopCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  onCompare:PropTypes.func
};

export default LaptopCard;
