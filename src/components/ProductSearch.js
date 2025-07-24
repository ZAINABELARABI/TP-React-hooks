import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'iPhone 14',
    image: '/images/iphone14.jpg',
    description: 'Écran OLED 6,1 pouces, puce A15 Bionic, double caméra 12 MP, iOS 16.',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22',
    image: '/images/samsung_s22.jpg',
    description: 'Écran AMOLED 6,2 pouces, processeur Snapdragon 8 Gen 1, triple caméra, Android 12.',
  },
  {
    id: 3,
    name: 'MacBook Pro',
    image: '/images/macbook_pro.jpg',
    description: 'Écran Retina 13 pouces, puce M1, 8 Go RAM, 256 Go SSD, macOS Monterey.',
  },
  
   {
    id: 4,
    name: 'iPhone 16 Pro Max',
    image: '/images/iphone16promax.jpg',
    description: 'Écran OLED 6,7 pouces, puce A18 Bionic, triple caméra 48 MP, iOS 18.',
  },
  {
    id: 5,
    name: 'Samsung Galaxy S24 Ultra',
    image: '/images/samsung_s24_ultra.jpg',
    description: 'Écran AMOLED 6,8 pouces, processeur Exynos 2400, quadruple caméra 200 MP, Android 14.',
  },
  {
    id: 6,
    name: 'Apple Headphones',
    image: '/images/apple_headphones.jpg',
    description: 'Casque circum-aural avec réduction active de bruit, son spatial, autonomie jusqu’à 20h.',
  },
  
];

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm]);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Search Products</h2>
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '30px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <li
              key={product.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '20px',
                padding: '10px',
                border: '1px solid #eee',
                borderRadius: '6px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                backgroundColor: '#fafafa',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '20px' }}
              />
              <div>
                <h3 style={{ margin: '0 0 8px' }}>{product.name}</h3>
                <p style={{ margin: 0, color: '#555' }}>{product.description}</p>
              </div>
            </li>
          ))
        ) : (
          <li style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>Aucun produit trouvé</li>
        )}
      </ul>
    </div>
  );
};

export default ProductSearch;
