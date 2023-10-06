import React from 'react';

function Spotify() {
  return (
    <section id="spotify" className="bg-white text-dark py-5">
      <div className="container">
        <h1 className="display-4">Escucha Nuestra Música</h1>
        <hr className="my-4" />
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/0zh6n2dLFTrdrkat91K40e?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Spotify;

