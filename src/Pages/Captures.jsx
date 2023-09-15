
/*
import React, { Component } from 'react';
import '../Styles.css';

class Captures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [], // Array to store photos
      videos: [], // Array to store videos
    };
  }

  componentDidMount() {
    // Fetch photos and videos data from the server (or wherever you store them)
    // For simplicity, we'll use static data here

    // Example photos and videos data
    const photosData = [
      { id: 1, url: 'photo1.jpg' },
      { id: 2, url: 'photo2.jpg' },
      // Add more photos here
    ];

    const videosData = [
      { id: 1, url: 'video1.mp4' },
      { id: 2, url: 'video2.mp4' },
      // Add more videos here
    ];

    this.setState({
      photos: photosData,
      videos: videosData,
    });
  }

  render() {
    const { photos, videos } = this.state;

    return (
      <div className="captures-container">
        <div className="frame-left">
          <h2>Photos</h2>
          <div className="photo-grid">
           {photos.map((photo) => (
              <img key={photo.id} src={photo.url} alt={`Photo ${photo.id}`} />
            ))}
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="frame-right">
          <h2>Videos</h2>
          <div className="video-grid">
            {videos.map((video) => (
              <video key={video.id} controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Captures;
*/