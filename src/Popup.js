import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Necesario para accesibilidad

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Popup"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "300px",
          backgroundColor: "#1e1e1e",
          color: "#f5f5f5",
          border: "none",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          zIndex: 2,
        },
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "15px",
          fontSize: "1.5rem",
        }}
      >
        🎉 Feliz CUMpleaños 🎉
      </h2>
      <p
        style={{ textAlign: "center", marginBottom: "20px", fontSize: "1rem" }}
      >
        Esta página es solo para amantes de las góticas culonas.
      </p>
      <img
        src="/images/cum.png"
        alt="CUMtry"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "10px",
          objectFit: "cover",
          marginBottom: "20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <button
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50", // Botón verde
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        onClick={closeModal}
      >
        Soi io
      </button>
    </Modal>
  );
};

export default Popup;
