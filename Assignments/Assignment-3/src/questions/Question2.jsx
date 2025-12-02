import React, { useState } from 'react'

const Question2 = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Correct credentials
  const correctUsername = 'admin'
  const correctPassword = 'password123'

  // Check if both username and password are correct
  const isCredentialCorrect = username === correctUsername && password === correctPassword

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ maxWidth: '300px', margin: '40px auto', padding: '24px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '6px' }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #aaa', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '6px' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #aaa', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', background: '#1976d2', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '16px', textAlign: 'center', padding: '12px', borderRadius: '4px', backgroundColor: isCredentialCorrect ? '#d4edda' : '#f8d7da' }}>
          {isCredentialCorrect ? (
            <p style={{ color: '#155724', fontWeight: 'bold', margin: 0 }}>✓ Welcome back!</p>
          ) : (
            <p style={{ color: '#721c24', fontWeight: 'bold', margin: 0 }}>✗ Please login</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Question2
