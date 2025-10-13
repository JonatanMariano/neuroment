import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";

export default function Quest2() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const questions = [
    {
      id: "mbti_1",
      texto: "Você prefere estudar sozinho ou em grupo?",
      opcoes: ["Sozinho", "Em grupo"],
    },
    {
      id: "mbti_2",
      texto:
        "Você se sente mais motivado por prazos rígidos ou por liberdade de organizar seu tempo?",
      opcoes: ["Prazos rígidos", "Liberdade"],
    },
    {
      id: "mbti_3",
      texto:
        "Você aprende melhor ao lidar com conceitos abstratos ou exemplos práticos?",
      opcoes: ["Conceitos abstratos", "Exemplos práticos"],
    },
    {
      id: "mbti_4",
      texto:
        "Quando tem uma tarefa difícil, você prefere seguir um passo a passo claro ou experimentar livremente até entender?",
      opcoes: ["Passo a passo", "Experimentar livremente"],
    },
    {
      id: "mbti_5",
      texto:
        "Você costuma decidir rápido ou precisa refletir bastante antes de agir?",
      opcoes: ["Decido rápido", "Refletir bastante"],
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
    navigate("/quest3");
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
        <h1>Questionário 2 – Personalidade (MBTI Adaptado)</h1>
        <p>
          Responda às perguntas abaixo para que o NeuroMent compreenda melhor
          suas preferências e estilo de personalidade nos estudos.
        </p>

        {questions.map((q, i) => (
          <div
            key={q.id}
            style={{
              backgroundColor: "#f9f9f9",
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
