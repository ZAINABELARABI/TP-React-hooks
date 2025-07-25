import React, { useState, useEffect, useContext } from 'react';
import useDebounce from '../hooks/useDebounce';
import useLocalStorage from '../hooks/useLocalStorage';
import { LanguageContext } from '../LanguageContext';

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
  
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [filteredProducts, setFilteredProducts] = useState(products);

  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const { t } = useContext(LanguageContext);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
    
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // --- Fonctions de pagination
  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(filteredProducts.length / productsPerPage);
    setCurrentPage(prev => (prev < maxPage ? prev + 1 : prev));
  };

  // --- Fonction bouton rechargement ---
  const handleReload = () => {
    setSearchTerm('');
    setCurrentPage(1);
    setFilteredProducts(products);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>{t.searchTitle || 'Search Products'}</h2>

      {/* --- Bouton Recharger à ajouter ici --- */}
      <button onClick={handleReload} style={{ marginBottom: 10, padding: '8px 12px' }}>
        Recharger
      </button>

      <input
        type="text"
        placeholder={t.searchPlaceholder}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '20px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      <ul style={{ padding: 0, listStyle: 'none' }}>
        {/* --- Remplacer filteredProducts par currentProducts --- */}
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
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
          <li style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>
            {t.noProductsFound || 'Aucun produit trouvé'}
          </li>
        )}
      </ul>

      {/* --- Pagination à ajouter ici --- */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Précédent
        </button>
        <span>
          {currentPage} / {Math.ceil(filteredProducts.length / productsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;
