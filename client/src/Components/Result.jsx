import { useEffect, useState } from "react";
import axios from "axios";
import QuestionElementResult from "./QuestionElementResult";

const Result = ({responses}) => {
  const score = responses.filter(resp=> resp.resp.correct === true).length;
  const result = ((score / responses.length) * 100).toFixed(2);
  const [link, setLink] = useState("");
  useEffect(()=>{
    const postScore = async () => {
     const data =  await axios({
        url: "https://qcm-istqb.vercel.app/score",
        method: "POST",
        data : {
          score,
          responses
        }
      });
      setLink("https://qcm-istqb-front.vercel.app/result/"+data.data._id)
    };
    postScore();
  },[responses, score])
  return <div className="container">
    <h2 className="mt-3 text-danger">Score : {score}/{responses.length} ({result}%) {result < 65? " 😭 Don't worry, you will make it, keep working" : "😁 You did it baby! I'm very proud of you 😘😘" }</h2>
    <h4 className="text-start mt-5">Enregistrer ce lien pour voir tes résultats après : <a href={link}>{link}</a></h4>
    {
      responses.map((resp,index)=>{
       return <div key={index}>
        <QuestionElementResult question={resp.question} index={index}/>
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

export default Result;