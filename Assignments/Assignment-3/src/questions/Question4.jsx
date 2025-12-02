import React, { useState } from 'react'

const Question4 = () => {
  const [username, setUsername] = useState('')

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Username Input</h2>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: 8, fontWeight: 'bold' }}>
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          style={{
            width: '100%',
            padding: 10,
            border: '1px solid #ccc',
            borderRadius: 4,
            fontSize: 14,
            boxSizing: 'border-box',
          }}
        />
      </div>

      {username && (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            backgroundColor: '#f0f8ff',
            border: '1px solid #b0d4ff',
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, color: '#333', fontSize: 16 }}>
            You entered: <strong>{username}</strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default Question4