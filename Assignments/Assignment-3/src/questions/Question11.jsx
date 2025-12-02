import React, { useEffect, useState } from 'react'

const Question11 = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const controller = new AbortController()

		async function fetchProducts() {
			try {
				setLoading(true)
				const res = await fetch('https://dummyjson.com/products', { signal: controller.signal })
				if (!res.ok) throw new Error(`HTTP ${res.status}`)
				const json = await res.json()
				// API returns { products: [...] }
				setProducts(json.products || [])
			} catch (err) {
				if (err.name !== 'AbortError') setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
		return () => controller.abort()
	}, [])

	if (loading) return <div style={{ padding: 20, textAlign: 'center' }}>Loading products...</div>
	if (error) return <div style={{ padding: 20, color: 'red', textAlign: 'center' }}>Error: {error}</div>

	return (
		<div style={{ padding: 20 }}>
			<h2 style={{ textAlign: 'center' }}>Products from dummyjson.com</h2>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16, marginTop: 16 }}>
				{products.map(p => (
					<div key={p.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}>
						<h3 style={{ margin: '6px 0', fontSize: 16 }}>{p.title}</h3>
						<p style={{ margin: '6px 0', color: '#666' }}><strong>Brand:</strong> {p.brand}</p>
						<p style={{ margin: '6px 0', color: '#d9534f', fontWeight: 'bold' }}>₹{p.price}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Question11

