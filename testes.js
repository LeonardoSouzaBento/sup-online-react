import { useEffect, useState } from "react"; // Importa dois hooks do React

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true); // Estado que controla se o componente aparece ou não
  const [fadeOut, setFadeOut] = useState(false); // Estado para controlar o efeito de desaparecimento

  useEffect(() => {
    setFadeOut(true);
    const timer = setTimeout(() => {
      setShowWelcome(false); // Após 1200ms, remove o componente da tela
    }, 1200);

    return () => clearTimeout(timer); // Limpa o timer para evitar problemas
  }, []);

  return (
    <>
      {showWelcome && (
        <div className={`transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`} // Adiciona classes CSS para a animação
          id="div_entrada"
        >
          <h1>Bem-vindo!</h1>
        </div>
      )}

      <div>
        <h2>Conteúdo principal</h2>
      </div>
    </>
  );
}
