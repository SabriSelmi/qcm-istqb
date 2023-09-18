import "./App.css";
import HomePage from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import QuestionsList from "./Components/QuestionsList";
import Result from "./Pages/Result";
/*const questions = [
  {
    question:
      " Quelle est la principale différence entre un test d'acceptation et un test de régression en test logiciel ?",
    options: [
      {
        rep: "Un test d'acceptation est effectué par les développeurs, tandis qu'un test de régression est effectué par les testeurs.",
        correct: false,
        tag: "A",
      },
      {
        rep: "Un test d'acceptation vérifie les nouvelles fonctionnalités, tandis qu'un test de régression vérifie les régressions après des modifications du code.",
        correct: true,
        tag: "B",
      },
      {
        rep: "Un test d'acceptation ne nécessite pas d'exécuter les cas de test, tandis qu'un test de régression exige leur exécution.",
        correct: false,
        tag: "C",
      },
      {
        rep: "Un test d'acceptation s'effectue avant le début du développement, tandis qu'un test de régression est effectué après chaque cycle de développement.",
        correct: false,
        tag: "D",
      },
    ],
  },
  {
    question:
      "Qu'est-ce qu'une 'boîte noire' (ou test de boîte noire) en test logiciel ?",
    options: [
      {
        rep: "Un type de test qui examine la structure interne du code source.",
        correct: false,
        tag: "A",
      },
      {
        rep: "Un type de test qui est effectué uniquement par des testeurs expérimentés.",
        correct: true,
        tag: "B",
      },
      {
        rep: "Un type de test qui ne nécessite pas de connaître les spécifications du logiciel.",
        correct: false,
        tag: "C",
      },
      {
        rep: "Un type de test qui ne s'applique qu'aux logiciels open source.",
        correct: false,
        tag: "D",
      },
    ],
  },
];*/

function App() {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios({
        url: "http://localhost:5000/questions",
        method: "GET",
      });
      setQuestions(result.data);
    };
    getData();
  }, [setQuestions]);
  console.log(responses);

  return (
    <div className="App">
      {step === 0 && <HomePage setStep={setStep} />}
      {step === 1 && (
        <QuestionsList
          questions={questions}
          setStep={setStep}
          setResult={setResponses}
          result={responses}
        />
      )}
      {step === 2 && <Result responses={responses} />}
    </div>
  );
}

export default App;
