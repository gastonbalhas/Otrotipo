import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f8f9fa', 
    color: '#000', 
    paddingTop: '10px', 
    paddingBottom: '10px',
  };

  const gimenaStyle = {
    fontSize: '10px', // Tamaño de fuente en píxeles para el párrafo de Gimena Walls
  };

  return (
    <footer style={footerStyle} className="text-center">
      <div className="container">
        <p>Desarrollado por TNG</p>
        <p>Todos los derechos reservados</p>
        <p style={gimenaStyle}>Fotos por Gimena Walls</p>
      </div>
    </footer>
  );
}

export default Footer;
