import "./App.css";
import HomePage from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import QuestionsList from "./Components/QuestionsList";
import Result from "./Components/Result";

function App() {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios({
        url: "https://qcm-istqb.vercel.app/questions",
        method: "GET",
      });
      setQuestions(result.data);
    };
    getData();
  }, [setQuestions]);

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
