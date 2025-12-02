import React from 'react'
import products from './Question6'

const Question6 = () => {
	return (
		<div style={{ padding: 24 }}>
			<h2 style={{ textAlign: 'center', marginBottom: 16 }}>Products</h2>
			<div style={{ overflowX: 'auto' }}>
				<table style={{ width: '100%', borderCollapse: 'collapse' }}>
					<thead>
						<tr>
							<th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: 8 }}>ID</th>
							<th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: 8 }}>Name</th>
							<th style={{ textAlign: 'right', borderBottom: '2px solid #ddd', padding: 8 }}>Price (₹)</th>
						</tr>
					</thead>
					<tbody>
						{products.map((p) => (
							<tr key={p.id}>
								<td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{p.id}</td>
								<td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{p.name}</td>
								<td style={{ padding: 8, borderBottom: '1px solid #f0f0f0', textAlign: 'right' }}>{p.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Question6

