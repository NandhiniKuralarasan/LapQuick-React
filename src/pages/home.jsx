import { Link } from "react-router-dom";
import ASUS from '../../data/assets/ASUS.jpg';
import Dell from '../../data/assets/Dell.jpg';
import Acer from '../../data/assets/Acer.jpg';
import Lenovo from '../../data/assets/Lenovo.jpg';

import { useState,useEffect,useRef} from "react";
import Header from "../Header.jsx";
import LaptopList from "../LaptopList.jsx";
import useLaptops from "../useLaptops.jsx";
import LaptopComparison from "../LaptopComparison.jsx";
import Footer from "../Footer.jsx";

function Home() {

  const [showLaptops, setShowLaptops] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [comparisonList, setComparisonList] = useState(() => {
  const savedLaptops = localStorage.getItem("comparisonList");

  return savedLaptops ? JSON.parse(savedLaptops) : [];
  });
  const laptopsRef = useRef(null);

  useEffect(() => {
  localStorage.setItem(
    "comparisonList",
    JSON.stringify(comparisonList)
  );
  }, [comparisonList]);
  const { laptops, error, loading, fetchLaptops } = useLaptops();

  const handleExplore = () => {
  setShowLaptops(true);

  fetchLaptops().catch((error) => {
    console.error("Error fetching laptops:", error);
  });
  };
  
   const handleCompare = (selectedLaptop) => {
  
    // Prevent duplicate laptops
    if (comparisonList.some((Lap) => Lap.name === selectedLaptop.name)) {
      alert("This laptop is already added!");
      return;
    }
  
    // Maximum two laptops
    if (comparisonList.length >= 2) {
      alert("You can compare only two laptops!");
      return;
    }
  
    setComparisonList([...comparisonList, selectedLaptop]);
  };

  const handleRemove = (laptopName) => {
  setComparisonList(
    comparisonList.filter((Lap) => Lap.name !== laptopName)
  );
  };

  const handleClearComparison = () => {
  setComparisonList([]);
  };

  const handleSort = (order) => {
  setSortOrder(order);
  };

  const imageMap = {
      "ASUS.jpg": ASUS,
      "Dell.jpg": Dell,
      "Acer.jpg": Acer,
      "Lenovo.jpg": Lenovo
    };

    const laptopsWithImages = laptops.map(Lap => ({
    ...Lap,
    image: imageMap[Lap.image]
  }));

  const sortedLaptops = [...laptopsWithImages].sort((a, b) => {
  if (sortOrder === "low") {
    return a.price - b.price;
  }

  if (sortOrder === "high") {
    return b.price - a.price;
  }

  return 0;
  });
  
  useEffect(() => {
  if (showLaptops && laptopsRef.current) {
    laptopsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  }, [showLaptops]);

  useEffect(() => {
  if (comparisonList.length > 0) {
    document.getElementById("comparison-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  }, [comparisonList.length]);

  return (
  <>
    <Header ExploreLaptops={handleExplore} />

    {showLaptops && !error && (
      <>
        <div className="sorting-buttons">
          <button onClick={() => handleSort("low")}>
            Price: Low to High
          </button>

          <button onClick={() => handleSort("high")}>
            Price: High to Low
          </button>
        </div>

        <div ref={laptopsRef}>
          <LaptopList
            laptops={sortedLaptops}
            loading={loading}
            onCompare={handleCompare}
            showCompare={true}
          />
        </div>
      </>
    )}

    {comparisonList.length > 0 && (
      <LaptopComparison
        comparisonList={comparisonList}
        onRemove={handleRemove}
        onClear={handleClearComparison}
      />
    )}

    {error && <p className="error-message">ERROR: {error}</p>}

    <Footer />
  </>
);
}

export default Home;