import { useState,useRef,useEffect} from 'react';
import useLaptops from '../useLaptops.jsx';
import '../App.css';
import LaptopFinder from '../LaptopFinder.jsx';
import LaptopList from '../LaptopList.jsx';
import Footer from '../Footer.jsx';

import ASUS from '../../data/assets/ASUS.jpg';
import Dell from '../../data/assets/Dell.jpg';
import Acer from '../../data/assets/Acer.jpg';
import Lenovo from '../../data/assets/Lenovo.jpg';



function FindLaptops() {
  const [showLaptops, setShowLaptops] = useState(false);
  const [filteredLaptops,setFilteredLaptops]=useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  const resultsRef = useRef(null);
  const { laptops,error,loading,fetchLaptops } = useLaptops();

  
  const handleFindLaptops = (budget, usage, brand) => {
  setShowLaptops(true);

   fetchLaptops()
    .then((data) => {
      if (!data) return;

      const result = data.filter((Lap) => {
        return (
          Lap.price <= Number(budget) &&
          Lap.usage.includes(usage) &&
          (brand === "Any" || Lap.brand === brand)
        );
      });

      setFilteredLaptops(result);
      setHasSearched(true);
    })
    .catch((error) => {
      console.log("Error fetching laptops:", error);
    });
  };
   
  useEffect(() => {
  if (hasSearched && resultsRef.current) {
    resultsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  }, [hasSearched, filteredLaptops]);


 
  const imageMap = {
    "ASUS.jpg": ASUS,
    "Dell.jpg": Dell,
    "Acer.jpg": Acer,
    "Lenovo.jpg": Lenovo
  };

 
  return (
    <>
      <div>
         <LaptopFinder onFindLaptops={handleFindLaptops} />

        {showLaptops && !error && (
         <div ref={resultsRef}>
         <LaptopList
            laptops={(hasSearched ? filteredLaptops : laptops).map((Lap) => ({
            ...Lap,image: imageMap[Lap.image]
          }))}
          loading={loading}/>
      </div>
)}

        
        {error && (
          <p className="error-message">
            ERROR: {error}
          </p>
        )}
      </div>
       <Footer />
    </>
  );
}

export default FindLaptops;