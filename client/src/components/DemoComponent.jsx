import React from 'react';

export default function DemoComponent() {
  return (
    <div style={{
      padding: '1.5rem',
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      marginTop: '1.5rem',
      textAlign: 'center'
    }}>
      <span style={{
        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
        color: '#fff',
        padding: '0.3rem 0.8rem',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Demo Component
      </span>
      <h3 style={{ marginTop: '0.75rem', marginBottom: '0.5rem', fontSize: '1.25rem', color: '#f8fafc' }}>
        Interactive Reusable Component
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
        This is demo component integrated into your page layout.
      </p>
    </div>
  );
}
