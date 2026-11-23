function LaptopComparison({ comparisonList,onRemove,onClear}) {
  return (
    <div className="comparison-section" id="comparison-section">
      <h2>Compare Laptops</h2>
      <div className="comparison-container">
        {comparisonList.map((Lap) => (
          <div className="comparison-card" key={Lap.name}>
            <img src={Lap.image} alt={Lap.name} className="comparison-image"/>
            <h3>{Lap.name}</h3>
            <p>Price: &#8377;{Lap.price}</p>
            <p>Processor: {Lap.processor}</p>
            <p>RAM: {Lap.RAM}</p>
            <p>Storage: {Lap.storage}</p>
            <button onClick={() => onRemove(Lap.name)} className="remove-btn">Remove</button>
          </div>
        
        ))}
      </div>
       {comparisonList.length > 0 && (
       <button onClick={onClear} className="clear-btn">
        Clear Comparison
        </button>
      )}
    </div>
  );
}

export default LaptopComparison;