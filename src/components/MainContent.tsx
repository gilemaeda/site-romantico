import { useState } from "react";

const MainContent = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h2>Conteúdo com Amor 💖</h2>
      <p>Clique no botão pra espalhar carinho:</p>
      <img 
        src="/src/assets/love.png" 
        alt="Coração fofo" 
        style={{ width: '200px', margin: '20px 0', borderRadius: '16px' }}
      />
      <button onClick={() => setCount(count + 1)}>Te amo {count} vezes 💘</button>
    </main>
  );
};


export default MainContent;
