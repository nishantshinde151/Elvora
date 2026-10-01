import React from 'react';
import DemoComponent from '../components/DemoComponent';

export default function DemoPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'radial-gradient(ellipse at top, #1e1b4b, #0f172a, #020617)',
      color: '#f8fafc',
      padding: '2rem',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        padding: '2.5rem',
        borderRadius: '24px',
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
          marginBottom: '1.5rem',
          boxShadow: '0 0 25px rgba(79, 70, 229, 0.5)',
          fontSize: '2rem'
        }}>
          🚀
        </div>

        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          margin: '0 0 1rem 0',
          background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          this is demo page
        </h1>

        <p style={{
          color: '#cbd5e1',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '1rem'
        }}>
          Welcome to your React client repository! This demo page and component are set up and ready to push to GitHub.
        </p>

        <DemoComponent />
      </div>
    </div>
  );
}
