import React, { useState, useEffect } from 'react'
import data from './Question10.json'

const Question10 = () => {
  const [products, setProducts] = useState([])

  // Load products from data.json
  useEffect(() => {
    setProducts(data.products)
  }, [])

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Products List</h2>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 16,
              width: 180,
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 120,
                objectFit: 'cover',
                borderRadius: 4,
                marginBottom: 12,
              }}
            />
            <h4 style={{ margin: '8px 0', fontSize: 14 }}>{product.name}</h4>
            <p style={{ margin: 0, color: '#d9534f', fontWeight: 'bold', fontSize: 16 }}>
              ₹{product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question10