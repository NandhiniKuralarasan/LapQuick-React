import { useParams } from "react-router-dom";
import useLaptops from "../useLaptops";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import ASUS from '../../data/assets/ASUS.jpg';
import Dell from '../../data/assets/Dell.jpg';
import Acer from '../../data/assets/Acer.jpg';
import Lenovo from '../../data/assets/Lenovo.jpg';

function LaptopDetails() {
  const { id } = useParams();

  const { laptops, loading, error, fetchLaptops } = useLaptops();

 useEffect(() => {
  fetchLaptops().catch(() => {});
 }, []);

  const laptop = laptops.find((Lap) => Lap.name === id);

    const imageMap = {
      "ASUS.jpg": ASUS,
      "Dell.jpg": Dell,
      "Acer.jpg": Acer,
      "Lenovo.jpg": Lenovo
    };

if (loading) {
  return <p>Loading laptop details...</p>;
}

if (error) {
  return <p className="error-message">{error}</p>;
}

if (!laptop) {
  return <p>Laptop not found!</p>;
}

return (
  <div className="laptop-details">
    <img src={imageMap[laptop.image]} alt={laptop.name}  className="details-image"/>
    <h2>{laptop.name}</h2>
    <p>Price: &#8377;{laptop.price}</p>
    <p>Brand: {laptop.brand}</p>
    <p>Processor: {laptop.processor}</p>
    <p>RAM: {laptop.RAM}</p>
    <p>Storage: {laptop.storage}</p>
    <p>Usage: {laptop.usage.join(", ")}</p>
    <Link to="/" className="button">Back to Home</Link>
  </div>
);
}

export default LaptopDetails;