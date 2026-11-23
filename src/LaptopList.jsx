import LaptopCard from './LaptopCard';
import loadingGif from '../data/assets/gif.gif';

function LaptopList({ laptops,loading,onCompare,showCompare = false }) {

    const laptopList = laptops.map((Lap) => (
        <LaptopCard
            key={Lap.name}
            name={Lap.name}
            price={Lap.price}
            image={Lap.image}
            onCompare={showCompare ? () => onCompare(Lap) : undefined}
        />
    ));

if (loading) {
  return <><div className='loading-container'>
<img src={loadingGif} alt="Loading...."/></div></>
}
else if (laptops.length > 0) {
   return (
    <section className="laptop-results">
      <h2>Recommended Laptops</h2>
      <div className="laptop-list">
        {laptopList}
      </div>
    </section>
  );
}
else {
  return (
    <p className="no-results">
      No laptops match your requirements. Try changing your filters.
    </p>
  );
}
}

export default LaptopList;