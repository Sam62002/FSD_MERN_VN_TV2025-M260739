import React, { useState } from 'react'

const Question9 = () => {
  // Array of students
  const students = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Carol Williams' },
    { id: 4, name: 'David Brown' },
    { id: 5, name: 'Emma Davis' },
    { id: 6, name: 'Frank Miller' },
    { id: 7, name: 'Grace Lee' },
    { id: 8, name: 'Henry Wilson' },
  ]

  const [searchTerm, setSearchTerm] = useState('')

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ maxWidth: 500, margin: '32px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center' }}>Student Search</h2>

      {/* Search Input */}
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="search" style={{ display: 'block', marginBottom: 8, fontWeight: 'bold' }}>
          Search by name:
        </label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type a student name..."
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

      {/* Results */}
      <div>
        <h3>Results: {filteredStudents.length} found</h3>
        {filteredStudents.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredStudents.map(student => (
              <li
                key={student.id}
                style={{
                  padding: 10,
                  marginBottom: 8,
                  backgroundColor: '#f0f8ff',
                  border: '1px solid #b0d4ff',
                  color:'black',
                  borderRadius: 4,
                }}
              >
                {student.name}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: 'center', color: '#999', marginTop: 16 }}>No students found</p>
        )}
      </div>
    </div>
  )
}

export default Question9