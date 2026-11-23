import { useState } from "react";

function LaptopFinder({onFindLaptops}){

  const [budget,setBudget]=useState("");
  const [usage,setUsage]=useState("");
  const [brand, setBrand]=useState("Any");

  const handleSubmit=(e)=>{
    e.preventDefault();

    onFindLaptops(budget,usage,brand);
  }

  return (
    <section  className="finder">
      <h2>Find Your Perfect Laptop</h2>
      <p>Choose your requirements to find a suitable laptop.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="budget">Select Your Budget</label>
          <select id="budget" name="budget" value={budget} onChange={(e)=>setBudget(e.target.value)}required>
            <option value="">Choose your budget</option>
            <option value="40000">Below ₹40,000</option>
            <option value="50000">₹40,000 - ₹50,000</option>
            <option value="70000">₹50,000 - ₹70,000</option>
            <option value="80000">₹70,000 - ₹80,000</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="usage">What will you use it for?</label>
          <select id="usage" name="usage" value={usage} onChange={(e)=>setUsage(e.target.value)} required>
            <option value="">Select your usage</option>
            <option value="Study">Study</option>
            <option value="Office">Office</option>
            <option value="Coding">Coding</option>
            <option value="Gaming">Gaming</option>
            <option value="Design">Design</option>
            <option value="Entertainment">Entertainment</option>

          </select>
        </div>

        <div className="form-group">
          <label htmlFor="brand">Preferred Brand</label>
          <select id="brand" name="brand" value={brand} onChange={(e)=>setBrand(e.target.value)} >
            <option value="Any">Any Brand</option>
            <option value="Asus">Asus</option>
            <option value="Dell">Dell</option>
            <option value="Acer">Acer</option>
            <option value="Lenovo">Lenovo</option>
          </select>
        </div>

        <button type="submit" className="find-button">
          Find Laptops
        </button>
      </form>
    </section>
  );
}

export default LaptopFinder;
