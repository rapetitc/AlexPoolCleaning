import React, { useState, useEffect, useContext } from "react";
import "./Gallery.scss";

import { FSContext } from "../../Context/FSContext";

const Gallery = () => {
  const { getFilesFrom } = useContext(FSContext);
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    getFilesFrom("media/gallery/").then((urls) => {
      setImgUrls(urls);
    });
  }, []);

  return (
    <div className='Gallery'>
      <div className='ImgsContainer'>
        {imgUrls.length > 0 ? (
          imgUrls.map((img, i) => {
            return <img src={img.url} alt={img.title} key={i} />;
          })
        ) : (
          <p>No imgs to show in Gallery</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
