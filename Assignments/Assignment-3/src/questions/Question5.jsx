import React, { useState } from 'react'

const Question5 = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [submitted, setSubmitted] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted({ name, email })
	}

	return (
		<div style={{ maxWidth: 480, margin: '32px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
			<h2 style={{ textAlign: 'center' }}>Submit your details</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 12 }}>
					<label htmlFor="name" style={{ display: 'block', marginBottom: 6 }}>Name</label>
					<input
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
						style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
					/>
				</div>
				<div style={{ marginBottom: 12 }}>
					<label htmlFor="email" style={{ display: 'block', marginBottom: 6 }}>Email</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
					/>
				</div>
				<button type="submit" style={{ padding: '8px 14px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>Submit</button>
			</form>

			{submitted && (
				<div style={{ marginTop: 20, padding: 12, borderRadius: 6, background: '#f7f9fc', border: '1px solid #e6eef9' }}>
					<h3 style={{ marginTop: 0 }}>Submitted Data</h3>
					<p style={{ margin: 0 }}><strong>Name:</strong> {submitted.name}</p>
					<p style={{ margin: 0 }}><strong>Email:</strong> {submitted.email}</p>
				</div>
			)}
		</div>
	)
}

export default Question5

