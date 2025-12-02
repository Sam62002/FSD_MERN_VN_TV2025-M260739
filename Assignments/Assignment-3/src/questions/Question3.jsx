import React from 'react'

// ProfileCard component that accepts props
const ProfileCard = ({ name, role, image }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 16,
        textAlign: 'center',
        width: 200,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        flex: '1 1 200px',
        minWidth: 180,
        backgroundColor:'lightcoral',
      }}
    >
      <div
        style={{
          width: '100%',
          paddingBottom: '100%',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 8,
          marginBottom: 12,
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <h3 style={{ margin: '8px 0' }}>{name}</h3>
      <p style={{ margin: 0, color: '#666' }}>{role}</p>
    </div>
  )
}

const Question3 = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Profile Cards</h1>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <ProfileCard
          name="Alice Johnson"
          role="Frontend Developer"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
        />
        <ProfileCard
          name="Bob Smith"
          role="Backend Developer"
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
        />
        <ProfileCard
          name="Carol Williams"
          role="UI/UX Designer"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
        />
      </div>
    </div>
  )
}

export default Question3