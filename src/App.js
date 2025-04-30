import React from 'react';
import './App.css';
import Popup from './Popup';
import CarouselComponent from './CarouselComponent';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#121212', color: '#f5f5f5', minHeight: '100vh' }}>
      <Popup />
      <header className="App-header" style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Feliz CUMpleaños 🎉</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Miau miau miau miau 🎂.
        </p>
        <CarouselComponent />
      </header>
      <main style={{ padding: '20px' }}>
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>CUNTry</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
            👹
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/images/kk.jpeg`}
            alt="Shitpost"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
              marginTop: '20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            }}
          />
        </section>
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Algo que diría CUM</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>🎂 "Un año más cerca de ser un fósil."</li>
            <li style={{ marginBottom: '10px' }}>🔥 "Felicidades, ahora eres oficialmente vintage."</li>
            <li style={{ marginBottom: '10px' }}>💀 "Recuerda: las velas cuestan más que el pastel."</li>
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Prohibidas las góticas culonas</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
            
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/images/pp.jpeg`}
            alt="Meme de cumpleaños"
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '10px',
              marginTop: '20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            }}
          /> <img
          src={`${process.env.PUBLIC_URL}/images/xd.jpg`}
          alt="Meme de cumpleaños"
          style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '10px',
            marginTop: '20px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          }}
        />
        </section>
      </main>
      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#1e1e1e', marginTop: '20px' }}>
        <p style={{ fontSize: '0.9rem' }}>
          © 2025 La CUMtry página - Todos los derechos tan abiertos como el ano de Contry 🎉.
        </p>
      </footer>
    </div>
  );
}

export default App;