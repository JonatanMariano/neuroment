import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";

export default function Quest3() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scaleOptions = [
    "1. Discordo Totalmente",
    "2. Discordo",
    "3. Neutro",
    "4. Concordo",
    "5. Concordo Totalmente",
  ];

  const questions = [
    {
      id: "int_musical",
      texto:
        "Tenho facilidade em aprender ou reconhecer músicas, ritmos e melodias.",
      opcoes: scaleOptions,
    },
    {
      id: "int_logico",
      texto:
        "Tenho facilidade em resolver problemas lógicos, cálculos ou quebra-cabeças.",
      opcoes: scaleOptions,
    },
    {
      id: "int_espacial",
      texto:
        "Tenho facilidade em compreender mapas, diagramas ou imaginar objetos em diferentes posições.",
      opcoes: scaleOptions,
    },
    {
      id: "int_corporal",
      texto:
        "Tenho facilidade em aprender por meio de movimento, prática física ou esportes.",
      opcoes: scaleOptions,
    },
    {
      id: "int_linguistica",
      texto: "Tenho facilidade em me expressar bem por escrito ou oralmente.",
      opcoes: scaleOptions,
    },
    {
      id: "int_interpessoal",
      texto:
        "Tenho facilidade em compreender e interagir bem com outras pessoas.",
      opcoes: scaleOptions,
    },
    {
      id: "int_intrapessoal",
      texto:
        "Tenho facilidade em compreender meus próprios sentimentos, emoções e motivações.",
      opcoes: scaleOptions,
    },
    {
      id: "int_naturalista",
      texto:
        "Tenho facilidade em observar, entender ou se interessar por fenômenos da natureza.",
      opcoes: scaleOptions,
    },
    {
      id: "int_existencial",
      texto:
        "Tenho facilidade em refletir sobre questões filosóficas, existenciais ou espirituais.",
      opcoes: scaleOptions,
    },
  ];

  const handleRadioChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const unanswered = questions.filter((q) => !answers[q.id]);
    if (unanswered.length > 0) {
      alert("Por favor, responda todas as perguntas antes de prosseguir.");
      return;
    }

    console.log("Respostas:", answers);
    navigate("/quest4");
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "40px 20px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <h1>Questionário 3 – Inteligências Múltiplas</h1>
        <p>
          Avalie o quanto você se identifica com as afirmações abaixo. Use a
          escala de 1 (Discordo Totalmente) a 5 (Concordo Totalmente).
        </p>

        {questions.map((q, i) => (
          <div
            key={q.id}
            style={{
              backgroundColor: "#ffffffff",
              padding: "20px",
              borderRadius: "6px",
              marginBottom: "24px",
            }}
          >
            <h3 style={{ marginBottom: "12px" }}>
              {i + 1}. {q.texto}
            </h3>

            {q.opcoes.map((op) => (
              <div key={op} style={{ marginBottom: "6px" }}>
                <RadioButton
                  inputId={`${q.id}-${op}`}
                  name={q.id}
                  value={op}
                  checked={answers[q.id] === op}
                  onChange={(e) => handleRadioChange(q.id, e.value)}
                />
                <label htmlFor={`${q.id}-${op}`} style={{ marginLeft: "8px" }}>
                  {op}
                </label>
              </div>
            ))}
          </div>
        ))}

        <Button
          label="Prosseguir"
          icon="pi pi-arrow-right"
          onClick={handleSubmit}
          style={{
            background: "black",
            border: "none",
            color: "white",
            marginTop: 20,
          }}
        />
      </div>
    </div>
  );
}
