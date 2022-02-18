import "./App.css";

import { useState } from "react";

export default function App() {
  const [peso, setPego] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  const calcularImc = () => {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(
        "Você está levemente acima do peso! Seu IMC" + imc.toFixed(2)
      );
    } else if (imc > 34.9) {
      setMensagem("Cuidado Obesidade! Seu IMC: " + imc.toFixed(2));
    }
  };

  return (
    <div className="app">
      <h1>Calculador IMC</h1>
      <span>Vamo calcular seu IMC</span>
      <div className="area-input">
        <input
          type="text"
          name=""
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(ev) => setPego(ev.target.value)}
        />
        <input
          type="text"
          name=""
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(ev) => setAltura(ev.target.value)}
        />
        <button onClick={calcularImc}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  );
}
