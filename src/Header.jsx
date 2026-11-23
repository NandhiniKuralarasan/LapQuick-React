import { Link } from "react-router-dom";

function Header({ ExploreLaptops }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">LapQuick</Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/find-laptops">Find a Laptop</Link></li>
          <li><a href="#comparison-section" onClick={(e) => {
                e.preventDefault();
                document.getElementById("comparison-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
                });
             }}>Compare</a>
        </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">SMART LAPTOP SHOPPING</p>

          <h1>Find Your Perfect Laptop</h1>

          <p className="hero-description">
            Discover laptops that match your budget, work requirements,
            and personal preferences.
          </p>

          <Link to="/find-laptops" className="hero-button">
            Find My Laptop
          </Link>

          <button className="hero-button" onClick={ExploreLaptops}>
            Explore Laptops
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
