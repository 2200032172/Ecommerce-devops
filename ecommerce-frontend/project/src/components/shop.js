// src/components/shop.js
import React, { useState, useEffect } from 'react';
import './shop.css';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [modalData, setModalData] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);


  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'Crepe Salwar and Suit',
        price: 8999,
        popularity: 5,
        img: 'https://theweaversshop.com/cdn/shop/files/DSC_4309_1_11zon_533x.jpg?v=1742276657',
        description: 'Classic and stylish Salwar and suit for everyday wear.',
      },
      {
        id: 2,
        name: 'Rimeline Floral Printed Kurta',
        price: 999,
        popularity: 4,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSARg29KBjrQXZHMYmYuvwDo_9ff4gR9rfHRyACAWoTfRKgBJrWtgy2iygxsCwQz7WrmOYTQv6KXrZarV9ELiAy_bRPa8tMAlhpf72_U1TTaqmREKlarRcWAg',
        description: 'Comfortable for all-day wear.',
      },
      {
        id: 3,
        name: "Women's Embroidered Anarkali Suit",
        price: 1901,
        popularity: 3,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ25QNLL2nrxiO1VysGxtm18Dx6PfSwDmBjqcxilthxnZyVd2Hr3lG3UtPgi-ZiVy_f8Xv4LwUY-xNnJD9g-JBMTb4YlK9OAl2_TT5DUV8',
        description: 'Perfect for all-day ethnic wear.',
      },
      {
        id: 4,
        name: 'Womens Solid Cotton Kurta Palazzo Set',
        price: 1999,
        popularity: 2,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQS9cdq1SKxA5brUYEgfOtfdQZ7oaGkAyuk13mXByK06L4HEPuqN3YxpZrYhYyMF61ejh_la-X4aN8o8-qI9yJtch1KaG9Rlq5pucmnr_zTS-_HNDOpanZh',
        description: 'Complemented with palazzos with a partially elasticated waistband and roomy pockets, and a dupatta.',
      },
      {
        id: 5,
        name: 'Style Quotient Womens Self Design Lace Regular Smart Casual Top',
        price: 1899,
        popularity: 6,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTV0Ri3YQb1NfObSEKtwKavdYXLtDFLpm_9Th3FR068a-hXu9H0bl3OcpURTG9lZoVbFGckPkYaatonriDuZQJPQLhkviYPk71ZHid0ncFYClNkMq0rsbrB_A',
        description: 'This gorgeous top features three-quarter puff sleeves with a flared hem, giving it a romantic and feminine touch.',
      },
      {
        id: 6,
        name: 'Men’s Button Down Shirt',
        price: 1050,
        popularity: 2,
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo0yaciI9mdd6RIu86_0ESDRFGMDjSO4MTX6B4QEZp4KV_ma_GMReA2ZFcw2CzSdaHKgDjS9Gp3UdeuJEMRDHqCMXtO2b0WODagzPAKMI',
        description: 'Smart casual for any occasion.',
      },
      {
        id: 7,
        name: 'Mens Buzau White Shirt',
        price: 1750,
        popularity: 4,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTxlk6gL2OKEf-mS0eMIPmCgAiIv-RgTEOvCsab52BlI6v_mBFwG1pGqDebdQGDyOvHOqUQ_n06DdNi7IvJ8I6mbDwVf5pj00EU-i4J6PI',
        description: 'Mens Buzau White Shirt | Slim Fit | Rayon | Spread | Printed, Geometric | Elevated, Street Wear.',
      },
      {
        id: 8,
        name: 'Mens Printed Casual Shirt',
        price: 1550,
        popularity: 5,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWdTSijtN5soIHOl5xiiL0wdh7USbzW3eS0H9G7UqwKbksL85_G0qy_sewAjvaiqfINaRsF2cbj-6vNpZ3ZHlbRT99VPH7gKbqljY-RuM',
        description: 'Smart casual for any occasion.',
      },
      {
        id: 9,
        name: 'Mens Printed Casual Shirt',
        price: 1550,
        popularity: 5,
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTEvI4GpgWL-WTS_IfpcQ1atyS8TtwNRbTCnZP-2McR6cpgR9Tqe3HVB7CMAeji8qfNKfHMU0HLWMgBLTuqbBlJKbt8-U1c9GDM4-T_WZjUWw_mO69bPrckHg',
        description: 'Smart casual for any occasion.',
      },
    ];
    setProducts(mockProducts);
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'popularity': return b.popularity - a.popularity;
      case 'price-high-low': return b.price - a.price;
      case 'price-low-high': return a.price - b.price;
      default: return 0;
    }
  });

  return (
    <div className="shop-container">

      {/* === NAVBAR START === */}
      <header className="shop-navbar">
        <nav className="navbar">
          <div className="logo-container">
            <div className="logo-main">SHOPPY</div>
            <div className="logo-sub">Wardrobe</div>
          </div>
          <ul className="nav-center">
            <li><a href="dashboard">Home</a></li>
            <li><a href="shop">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div className="nav-right">
            <div className="cart-icon-container">
              <FaShoppingBag className="icon" />
              <span className="cart-badge">0</span>
            </div>
          </div>
        </nav>
      </header>
      {/* === NAVBAR END === */}


      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <select value={sortBy} onChange={handleSortChange} className="sort-dropdown">
          <option value="default">Default Sorting</option>
          <option value="popularity">Sort by Popularity</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="price-low-high">Price: Low to High</option>
        </select>
      </div>

      <div className="product-grid">
        {sorted.map((product) => (
          <div key={product.id} className="product-card" onClick={() => setModalData(product)}>
            <div className="card-icon">
              <FaShoppingBag />
            </div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">Rs. {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setModalData(null)}>×</span>
            <img src={modalData.img} alt={modalData.name} />
            <h3>{modalData.name}</h3>
            <p>{modalData.description}</p>
            <p className="price">Rs. {modalData.price.toFixed(2)}</p>
            <h4>Size Chart</h4>
            <div className="size-options">
  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
    <button
      key={size}
      className={`size-square ${selectedSize === size ? 'active' : ''}`}
      onClick={() => setSelectedSize(size)}
    >
      {size}
    </button>
  ))}
</div>



            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
