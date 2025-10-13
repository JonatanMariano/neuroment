import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Quest1() {
  const navigate = useNavigate();


  const [answers, setAnswers] = useState({});

 useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []); 

  const questions = [
    {
      id: "bases_1",
      texto: "Você costuma estudar melhor em qual período do dia?",
      tipo: "radio",
      opcoes: ["Manhã", "Tarde", "Noite", "Madrugada"],
    },
    {
      id: "bases_2",
      texto: "Quanto tempo, em média, você consegue manter o foco sem pausa?",
      tipo: "input",
    },
    {
      id: "bases_3",
      texto: "Como você percebe seu ritmo de energia ao longo do dia?",
      tipo: "radio",
      opcoes: ["Constante", "Oscilante", "Mais à tarde", "Mais pela manhã"],
    },
    {
      id: "bases_4",
      texto: "Qual técnica de estudo você já usou?",
      tipo: "checkbox",
      opcoes: ["Pomodoro", "Mapas mentais", "Resumo escrito", "Flashcards", "Outra"],
    },
    {
      id: "bases_5",
      texto: "Qual delas funcionou melhor para você?",
      tipo: "radio",
      opcoes: ["Pomodoro", "Mapas mentais", "Resumo escrito", "Flashcards", "Outra"],
    },
    {
      id: "bases_6",
      texto: "O que mais atrapalha sua concentração?",
      tipo: "checkbox",
      opcoes: ["Celular", "Ambiente barulhento", "Cansaço", "Falta de motivação", "Outra"],
    },
  ];

  // === HANDLERS =====================================================

  const handleRadioChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id, value, checked) => {
    const prevValues = Array.isArray(answers[id]) ? answers[id] : [];
    const newValues = checked
      ? [...prevValues, value]
      : prevValues.filter((v) => v !== value);

    setAnswers((prev) => ({ ...prev, [id]: newValues }));
  };

  const handleInputChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  // === SUBMIT =====================================================

  const handleSubmit = () => {
    const unanswered = questions.filter((q) => {
      const answer = answers[q.id];
      if (q.tipo === "radio") return !answer;
      if (q.tipo === "checkbox")
        return !Array.isArray(answer) || answer.length === 0;
      if (q.tipo === "input")
        return !answer || answer.trim() === "";
      return false;
    });

    if (unanswered.length > 0) {
      alert("Por favor, responda todas as perguntas antes de prosseguir.");
      return;
    }

    console.log("Respostas:", answers);
    navigate("/quest2");
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
          <h1>Questionário 1 – Bases Neurocientíficas</h1>
          <p>
            Responda as perguntas abaixo para que o NeuroMent compreenda seu
            funcionamento cognitivo e hábitos de estudo.
          </p>
          {questions.map((q, index) => (
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
                {index + 1}. {q.texto}
              </h3>
              {/* RADIO */}
              {q.tipo === "radio" &&
                q.opcoes?.map((op) => (
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
              {/* CHECKBOX */}
              {q.tipo === "checkbox" &&
                q.opcoes?.map((op) => (
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
              {/* INPUT */}
              {q.tipo === "input" && (
                <div style={{ marginTop: "10px" }}>
                  <InputText
                    placeholder="Digite o tempo (ex: 00:30)"
                    value={answers[q.id] || ""}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                  />
                </div>
              )}
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
