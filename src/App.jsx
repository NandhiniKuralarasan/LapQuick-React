import { createHashRouter,RouterProvider } from "react-router-dom";

import Home from "./pages/home.jsx";
import FindLaptops from "./pages/findLaptops.jsx";
import LaptopDetails from "./pages/LaptopDetails.jsx";

const router= createHashRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/find-laptops",
    element:<FindLaptops/>
  },
  {
  path: "/laptop/:id",
  element: <LaptopDetails />
  }
], {
  basename: import.meta.env.BASE_URL
});
function App() {

  return <RouterProvider router={router}/> ;

    
}

export default App;


 
//  npx json-server --watch data/LaptopData.json --port 3000 -static ./data























