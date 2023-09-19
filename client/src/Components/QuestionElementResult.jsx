const QuestionElementResult = ({question, index, selectedOption, setSelectedOption}) =>{

  return <div className="mt-5">
    <h3 className="text-start">Question {index + 1} : {question.question.split("\n").map((el,i)=><span>{el} <br/></span>)}</h3> 
    {question.image ? <img className="img-fluid" src={question.image} alt="question"/> : null}
    <div className="text-start mt-5">
      {question.options.sort((a,b)=>a.tag.localeCompare(b.tag)).map((option, i)=>{
        return <div key={i}>
          <label className={`p-2 ${option.correct ? "selected" : ""}`}>
          {option.tag} : {option.rep}
        </label>
        </div>
      })}
    </div>
  </div>
}

export default QuestionElementResult;