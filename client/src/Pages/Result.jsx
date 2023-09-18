import QuestionElementResult from "../Components/QuestionElementResult";

const Result = ({responses}) => {
  const score = responses.filter(resp=> resp.resp.correct === true).length;
  return <div className="container">
    <h2 className="mt-3 text-danger">Score : {score}/{responses.length}</h2>
    {
      responses.map((resp,index)=>{
       return <div key={index}>
        <QuestionElementResult question={resp.question} index={index}/>
        <h5 className="mt-4 text-start">Ta Réponse :</h5>
        <p className="text-start">{resp.resp.tag} : {resp.resp.rep} {resp.resp.correct ? "✅": "❌"}</p>
       </div> 
      })
    }
  </div>
}

export default Result;