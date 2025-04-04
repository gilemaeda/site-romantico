import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  
  //const [isPlaying, setIsPlaying] = useState(true);
  const [heartCount, setHeartCount] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const restartMusic = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsMusicPlaying(true);
    }
  };

  return (
    <div className="container">
      <header>
        <h1 className="glow">Gile e Tayani 💖</h1>
      </header>

      <div className="gallery">
        <img src={images[currentImage]} alt="Galeria" className="gallery-img" />
      </div>

      <div className="heart-counter">
        <p>Te amo {heartCount} vezes 💖</p>
        <p>Clique no botão para espalhar carinho!</p>
        <button className="heart-button" onClick={() => setHeartCount(heartCount + 1)}>
          💕
        </button>
      </div>

      <div className="music-controls">
        <button className="music-button" onClick={toggleMusic}>
          {isMusicPlaying ? "⏸️ Pausar música" : "▶️ Tocar música"}
        </button>
        <button className="music-button restart" onClick={restartMusic}>
          🔁 Recomeçar música
        </button>
      </div>

      <audio ref={audioRef} loop>
        <source src="/music/romantic.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default App;
