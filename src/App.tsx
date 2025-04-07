
import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const images = Array.from({ length: 10 }, (_, i) => `/images/photo${i + 1}.jpg`);
const musicFiles = Array.from({ length: 10 }, (_, i) => `/music/music${i + 1}.mp3`);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [heartCount, setHeartCount] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
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

  const nextTrack = () => {
    const next = (currentTrack + 1) % musicFiles.length;
    setCurrentTrack(next);
    if (audioRef.current) {
      audioRef.current.src = musicFiles[next];
      audioRef.current.play();
      setIsMusicPlaying(true);
    }
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + musicFiles.length) % musicFiles.length;
    setCurrentTrack(prev);
    if (audioRef.current) {
      audioRef.current.src = musicFiles[prev];
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
          🔁 Recomeçar
        </button>
        <button className="music-button" onClick={prevTrack}>
          ⏮️ Anterior
        </button>
        <button className="music-button" onClick={nextTrack}>
          ⏭️ Próxima
        </button>
      </div>

      <audio ref={audioRef} src={musicFiles[currentTrack]} loop />

      <div className="love-letter">
        <h2>Carta de Amor</h2>
        <p>
          Minha linda Tayani, cada dia contigo é um presente. Espero que esse site seja um reflexo
          do quanto você é especial pra mim 💕
        </p>
      </div>

      <div className="video-link">
        <Link to="/video">
          <button className="music-button">🎥 Ver Vídeo Especial</button>
        </Link>
      </div>

      <div className="hearts-container">
        {[...Array(30)].map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 10;
          const size = 20 + Math.random() * 20;

          return (
            <div
              key={i}
              className="heart"
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                fontSize: `${size}px`,
              }}
            >
              ♥
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
