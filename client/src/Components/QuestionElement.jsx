import { useMemo } from "react";
import ProgressBar from "./ProgressBar";

const QuestionElement = ({question, index, selectedOption, setSelectedOption, questionsNumb}) =>{
const tags = ["A", "B", "C", "D"];
const options = useMemo(()=>question.options.sort(() => Math.random() - 0.5),[question])
  return <div className="mt-5">
    <ProgressBar currentQuestion={index+1} totalQuestions={questionsNumb} />
    <div className="pull-right">
      Question {index + 1} / {questionsNumb}
    </div>
    <h3 className="text-start">Question {index + 1} : {question.question}</h3> 
    <div className="text-start mt-5">
      {options.map((option, i)=>{
        return <div key={i}>
          <label className={`pointer question mt-3 p-2 ${selectedOption?.tag === option.tag ? "selected" : ""}`} onClick={()=>setSelectedOption(option)}>
          {tags[i]} : {option.rep}
        </label>
        </div>
      })}
    </div>
  </div>
}

export default QuestionElement;