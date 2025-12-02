import React from 'react'
import students from './Question1'

const Question1 = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 12 }}>Student list</h1>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap',  }}>
      {students.map((student, idx) => (
        
        <div
          key={idx}
          style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 12,
            width: 220,
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            backgroundColor:'lightcoral'
          }}
        >
          <h3 style={{ margin: '0 0 8px 0' }}>{student.name}</h3>
          <p style={{ margin: 0 }}><strong>Dept:</strong> {student.dept}</p>
          <p style={{ margin: 0 }}><strong>Year:</strong> {student.Year}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Question1
