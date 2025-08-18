
import "./MainContent.css";

function MainContent() {
  return (
    <main className="main-container">
      {/* Heading */}
      <h2 className="main-heading">🌸 Creating the Nursery Page</h2>

      {/* Paragraph */}
      <p className="welcome-text">
        Welcome to GreenLeaf Nursery! Explore our collection of beautiful flowers and choose your favorite.
      </p>

      {/* Dropdown */}
      <div className="dropdown-container">
        <label htmlFor="location" className="dropdown-label">Select Location: </label>
        <select id="location" className="dropdown">
          <option value="chennai">Chennai</option>
          <option value="bangalore">Bangalore</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
        </select>
      </div>

      {/* Flower List */}
      <ul className="flower-list">
        <li>Rose</li>
        <li>Lily</li>
        <li>Tulip</li>
        <li>Sunflower</li>
        <li>Jasmine</li>
      </ul>
    </main>
  );
}

export default MainContent;
