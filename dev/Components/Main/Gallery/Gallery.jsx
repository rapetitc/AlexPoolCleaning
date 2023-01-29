import React, { useState, useEffect, useContext } from "react";
import "./Gallery.scss";

import { FSContext } from "../../../Context/FSContext";

const Gallery = () => {
  const { getAllImgsFrom } = useContext(FSContext);
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    getAllImgsFrom("media/gallery/").then((urls) => {
      setImgUrls(urls);
    });
  }, []);

  return (
    <div className='Gallery'>
      <div className='ImgsContainer'>
        {imgUrls.length > 0 ? (
          imgUrls.map((img, i) => {
            return <img src={img} alt='img' key={i} />;
          })
        ) : (
          <p>No imgs to show in Gallery</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
