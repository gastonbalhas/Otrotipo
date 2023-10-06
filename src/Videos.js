import React from 'react';
import YouTube from 'react-youtube';

function Videos() {
  const videoOptions = {
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const videoId = 'yjwpPZ66qGo';

  return (
    <section id="videos" className="bg-white text-dark py-5"> 
      <div className="container">
        <h1 className="display-4">Video Destacado</h1>
        <hr className="my-4" />
        <div className="row">
          <div className="col-lg-12">
            <div className="embed-responsive embed-responsive-16by9">
              <YouTube videoId={videoId} opts={videoOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
