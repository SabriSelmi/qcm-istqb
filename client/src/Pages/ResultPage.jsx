import axios from "axios";
import { useLoaderData } from "react-router-dom";
import QuestionElementResult from "../Components/QuestionElementResult";

export async function getScore({params}) {
  const scoreData = await axios({
    url: `https://qcm-istqb.vercel.app/score/${params.id}`,
    method: "GET"
  });

  return {scoreData}
}

const ResultPage = () => {
  const { scoreData } = useLoaderData();
  const responses = scoreData.data;
  const score = responses.score;
  const result = ((score / responses.responses?.length) * 100).toFixed(2);

  return <div className="container">
    <h2 className="mt-3 text-danger">Score : {score}/{responses.responses.length} ({result}%){result < 65? " 😭 Don't worry, you will make it, keep working" : "😁 You did it baby! I'm very proud of you 😘😘" }</h2>
    {
      responses.responses?.map((resp,index)=>{
       return <div key={index}>
        <QuestionElementResult question={resp?.question} index={index}/>
        <h5 className="mt-4 text-start">Ta Réponse :</h5>
        <p className="text-start">{resp.resp.tag} : {resp.resp.rep} {resp.resp.correct ? "✅": "❌"}</p>
       </div> 
      })
    }
    <div className="bottom-bar-fixed">
      <button className="btn btn-dark"><a style={{textDecoration : "none", color:"white"}} href="/">Repasser le test 😤</a></button>
    </div>
   
  </div>
}

export default ResultPage;