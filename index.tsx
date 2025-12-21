
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("Script index.tsx carregado. Tentando montar o React...");

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React montado com sucesso!");
  } catch (error) {
    console.error("Erro crítico ao montar o React:", error);
    container.innerHTML = `<div style="padding: 20px; color: white;">Erro ao carregar o site. Verifique o console do navegador.</div>`;
  }
} else {
  console.error("Erro: Elemento #root não encontrado no HTML.");
}
