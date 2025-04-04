import { useState, useEffect, useRef } from "react";
import "./App.css";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
];

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
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

      <div className="love-letter">
        <h2>Carta de Amor</h2>
        <p>
          Minha linda Tayani, cada dia contigo é um presente. Espero que esse site seja um reflexo
          do quanto você é especial pra mim 💕
        </p>
      </div>

      <audio ref={audioRef} loop>
        <source src="/music/romantic.mp3" type="audio/mp3" />
      </audio>

      <div className="hearts-container">
  {[...Array(30)].map((_, i) => {
    const left = Math.random() * 100; // porcentagem
    const delay = Math.random() * 10; // segundos
    const size = 20 + Math.random() * 20; // px

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
