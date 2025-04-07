
import "./App.css";
import { Link } from "react-router-dom";

const VideoPage = () => {
  return (
    <div className="container">
      <header>
        <h1 className="glow">Vídeo Especial de 1 ano de namoro 💖</h1>
      </header>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/2f9tA-LYuGY"
          title="Vídeo especial para Tayani"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/">
          <button className="music-button">⬅️ Voltar para o site</button>
        </Link>
      </div>
    </div>
  );
};

export default VideoPage;
