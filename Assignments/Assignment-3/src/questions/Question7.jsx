import React from 'react'

// Child component that receives the function as prop
const ChildComponent = ({ onAlert }) => {
  return (
    <div style={{ padding: 16, border: '1px solid #ccc', borderRadius: 4, textAlign: 'center' }}>
      <h3>Child</h3>
      <button
        onClick={() => onAlert('Button clicked from child!')}
        style={{
          padding: '8px 16px',
          background: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        Click me!
      </button>
    </div>
  )
}

// Parent component with the function
const Question7 = () => {
  const showAlert = (message) => {
    alert(message)
  }

  return (
    <div style={{ maxWidth: 500, margin: '32px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center' }}>Parent-Child</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>if you're a child click below:</p>
      
      <ChildComponent onAlert={showAlert} />
    </div>
  )
}

export default Question7