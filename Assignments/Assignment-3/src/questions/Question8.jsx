import React, { useState } from 'react'

const Question8 = () => {
  // Product data
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-Shirt', category: 'Clothes' },
    { id: 3, name: 'Headphones', category: 'Electronics' },
    { id: 4, name: 'Jeans', category: 'Clothes' },
    { id: 5, name: 'Tablet', category: 'Electronics' },
    { id: 6, name: 'Jacket', category: 'Clothes' },
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const categories = ['All', 'Electronics', 'Clothes']

  return (
    <div style={{ maxWidth: 600, margin: '32px auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Product Filter</h2>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24, justifyContent: 'center' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 16px',
              background: selectedCategory === cat ? '#1976d2' : '#e0e0e0',
              color: selectedCategory === cat ? '#fff' : '#333',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontWeight: selectedCategory === cat ? 'bold' : 'normal',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div>
        <h3>Showing: {selectedCategory}</h3>
        {filteredProducts.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredProducts.map(product => (
              <li
                key={product.id}
                style={{
                  padding: 12,
                  marginBottom: 8,
                  border: '1px solid #ddd',
                  borderRadius: 4,
                  backgroundColor: '#f9f9f9',
                  color:'black'
                }}
              >
                <strong>{product.name}</strong> - {product.category}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: 'center', color: '#999' }}>No products found</p>
        )}
      </div>
    </div>
  )
}

export default Question8