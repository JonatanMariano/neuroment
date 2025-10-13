import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Quest5() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const likertConcordancia = [
    "1. Discordo Totalmente",
    "2. Discordo",
    "3. Neutro",
    "4. Concordo",
    "5. Concordo Totalmente",
  ];

  const likertFrequencia = [
    "1. Nunca",
    "2. Raramente",
    "3. Às vezes",
    "4. Frequentemente",
    "5. Sempre",
  ];

  const opcoesCondicoes = [
    "TDAH",
    "Dislexia",
    "Ansiedade",
    "Depressão",
    "Outro (especificar)",
  ];

  const opcoesMotivacao = [
    "Conquistar objetivos",
    "Aprender algo novo",
    "Reconhecimento",
    "Melhorar de vida",
  ];

  const questions = [
    {
      id: "dif_1",
      texto: "Você sente dificuldade em manter o foco em tarefas longas?",
      tipo: "likert",
      opcoes: likertConcordancia,
    },
    {
      id: "dif_2",
      texto: "Você tem dificuldades de memorização?",
      tipo: "likert",
      opcoes: likertConcordancia,
    },
    {
      id: "dif_3",
      texto:
        "Você costuma procrastinar mesmo sabendo o que precisa ser feito?",
      tipo: "likert",
      opcoes: likertFrequencia,
    },
    {
      id: "dif_4",
      texto:
        "Você tem diagnóstico ou suspeita de TDAH, dislexia, ansiedade, depressão ou outra condição que afeta seus estudos?",
      tipo: "checkbox",
      opcoes: opcoesCondicoes,
    },
    {
      id: "dif_5",
      texto:
        "Qual é o maior obstáculo que você enfrenta atualmente para aprender?",
      tipo: "input",
    },
    {
      id: "dif_6",
      texto: "O que mais te motiva a estudar?",
      tipo: "radio",
      opcoes: opcoesMotivacao,
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

    if (id === "dif_4" && value === "Outro (especificar)" && !checked) {
      setAnswers((prev) => ({ ...prev, dif_4_outro: "" }));
    }
  };

  const handleInputChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const unanswered = questions.filter((q) => {
      const answer = answers[q.id];
      if (q.tipo === "radio" || q.tipo === "likert") return !answer;
      if (q.tipo === "checkbox")
        return !answer || (answer.length === 0);
      if (q.tipo === "input") return !answer || answer.trim() === "";
      return false;
    });

    if (unanswered.length > 0) {
      alert("Por favor, responda todas as perguntas antes de prosseguir.");
      return;
    }

    console.log("Quest5 Respostas:", answers);
    alert("Questionário concluído! Obrigado por participar.");
    setAnswers({});
    // navigate("/algum_lugar");
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
          backgroundColor: "rgba(255,255,255,0.92)",
          padding: "40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <h1>Questionário 5 – Dificuldades e Condições</h1>
        <p>
          Essas perguntas ajudam o NeuroMent a identificar possíveis obstáculos e fatores
          motivacionais nos seus estudos.
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

            {/* Radio e Likert */}
            {(q.tipo === "radio" || q.tipo === "likert") &&
              q.opcoes.map((op) => (
                <div
                  key={op}
                  style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}
                >
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

            {/* Checkbox */}
            {q.tipo === "checkbox" && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px 30px",
                    marginTop: "8px",
                  }}
                >
                  {q.opcoes.map((op) => (
                    <div key={op} style={{ display: "flex", alignItems: "center" }}>
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

                {q.id === "dif_4" &&
                  Array.isArray(answers.dif_4) &&
                  answers.dif_4.includes("Outro (especificar)") && (
                    <div style={{ marginTop: "15px" }}>
                      <InputText
                        placeholder="Especifique a condição..."
                        value={answers.dif_4_outro || ""}
                        onChange={(e) =>
                          handleInputChange("dif_4_outro", e.target.value)
                        }
                        style={{ width: "100%", maxWidth: "400px" }}
                      />
                    </div>
                  )}
              </>
            )}

            {/* Input simples */}
            {q.tipo === "input" && (
              <div style={{ marginTop: "10px" }}>
                <InputText
                  placeholder="Descreva seu maior obstáculo..."
                  value={answers[q.id] || ""}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  style={{ width: "100%", maxWidth: "500px" }}
                />
              </div>
            )}
          </div>
        ))}

        <Button
          label="Concluir"
          icon="pi pi-check"
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
