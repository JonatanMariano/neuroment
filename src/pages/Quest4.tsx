import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

export default function Quest4() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const questions = [
    {
      id: "estilo_1",
      texto:
        "Você prefere aprender lendo textos, ouvindo explicações, vendo imagens ou praticando na prática?",
      tipo: "radio",
      opcoes: ["Textos", "Explicações", "Imagens", "Prática"],
    },
    {
      id: "estilo_2",
      texto: "Em uma aula, o que mais ajuda você a fixar o conteúdo?",
      tipo: "radio",
      opcoes: ["Escrever", "Ouvir", "Ver", "Fazer"],
    },
    {
      id: "estilo_3",
      texto: "O que você faz primeiro quando precisa aprender algo novo?",
      tipo: "radio",
      opcoes: ["Ler", "Ouvir", "Assistir", "Praticar"],
    },
  ];

  const handleRadioChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id, value, checked) => {
    const prevValues = (answers[id] || []);
    const newValues = checked
      ? [...prevValues, value]
      : prevValues.filter((v) => v !== value);
    setAnswers((prev) => ({ ...prev, [id]: newValues }));
  };

  const handleSubmit = () => {
    const unanswered = questions.filter((q) => {
      const answer = answers[q.id];
      if (q.tipo === "radio") return !answer;
      if (q.tipo === "checkbox")
        return !answer || (answer.length === 0);
      return false;
    });

    if (unanswered.length > 0) {
      alert("Por favor, responda todas as perguntas antes de prosseguir.");
      return;
    }

    console.log("Respostas:", answers);
    navigate("/quest5");
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
        <h1>Questionário 4 – Hábitos e Foco Cognitivo</h1>
        <p>
          Essas perguntas ajudam o NeuroMent a entender seu ambiente e foco durante os estudos.
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

            {q.tipo === "radio" &&
              q.opcoes.map((op) => (
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

            {q.tipo === "checkbox" &&
              q.opcoes.map((op) => (
                <div key={op} style={{ marginBottom: "6px" }}>
                  <Checkbox
                    inputId={`${q.id}-${op}`}
                    value={op}
                    checked={
                      Array.isArray(answers[q.id]) &&
                      answers[q.id].includes(op)
                    }
                    onChange={(e) =>
                      handleCheckboxChange(q.id, op, e.checked)
                    }
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
