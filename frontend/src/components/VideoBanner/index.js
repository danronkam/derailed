import React from 'react';
import './VideoBanner.css'; 

const VideoBanner = ({ videoSrc, title, description, buttonText }) => {
  return (
    <div className="video-banner-container">
      <video autoPlay muted loop className="video-banner">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-container">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-description">{description}</p>
        <button className="banner-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default VideoBanner;
