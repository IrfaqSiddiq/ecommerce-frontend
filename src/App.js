import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div style={styles.wrapper}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <nav>
            <ul style={styles.navList}>
              <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
              <li style={styles.navItem}><Link to="/products" style={styles.link}>Products</Link></li>
              <li style={styles.navItem}><Link to="/detail" style={styles.link}>Detail</Link></li>
              <li style={styles.navItem}><Link to="/user/123" style={styles.link}>User 123</Link></li>
              <li style={styles.navItem}><Link to="/login" style={styles.link}>Login</Link></li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <Routes>
            {/* Home route */}
            <Route path="/" element={<h1>Home Page</h1>} />

            {/* Products route */}
            <Route path="/products" element={<ProductList />} />

            {/* Product detail */}
            <Route path="/products/:id" element={<ProductDetail />} />

            {/* User profile with dynamic ID */}
            <Route path="/user/:id" element={<UserProfile />} />

            <Route path="/login" element={<LoginForm />} />

            {/* Catch-all 404 route */}
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function UserProfile() {
  const { id } = useParams(); // Access the dynamic ID

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#2c3e50',
    color: 'white',
    paddingTop: '30px',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column', // Ensures links are stacked vertically
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
  },
  navList: {
    listStyleType: 'none', // Removes default bullet points
    padding: 0, // Removes padding from the list
    margin: 0, // Removes margin
    width: '100%',
  },
  navItem: {
    width: '100%',

  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px 20px',
    borderRadius: '4px',
    display: 'block', // Ensures the link spans the full width of the list item
    transition: 'background-color 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#34495e',
  },
  mainContent: {
    marginLeft: '250px', // Space for the sidebar
    padding: '20px',
    flex: 1,
    backgroundColor: '#ecf0f1',
    height: '100vh',
    overflowY: 'auto',
  },
};

export default App;
