import { useState } from "react";
import QuestionElement from "./QuestionElement";

const QuestionsList = ({questions, setStep, setResult, result}) => {
  const [questNumber, setQuestNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState({});
  return <div className="container">
    {questions.map(((question, index)=> index === questNumber && <QuestionElement 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
        questionsNumb = {questions.length}
        index={index} 
        key={index} 
        question={question}/>))  }
      <button className="btn btn-dark mt-5 mb-3" disabled={!selectedOption.tag} onClick={()=>{
        setQuestNumber(questNumber+1); 
        setResult(result.concat({
          question : questions[questNumber], 
          resp : selectedOption}
          ));
          setSelectedOption({})
          questions.length === questNumber +1 && setStep(2)
        }}
        >
      {questions.length === questNumber +1 ? "Get Result" : "❤️ Next Question ❤️"}
      </button>
  
  </div>
}

export default QuestionsList;