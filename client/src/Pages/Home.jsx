const HomePage = ({setStep}) =>{
 return  <div className="container">
    <h2 className="mt-5">ISTQB Preparation Test For my love  ❤️ ❤️ Manon ❤️ ❤️</h2>
    <p className="jumbotron mt-5">
      I wish you the best of luck sweet heart! <br/>
      I believe in you and you can make it. <br/>
      We are all with you! Me, your mother, Sasha and Rayan
    </p>
    <button className="btn btn-success mt-5" onClick={()=>setStep(1)}>Start the Quiz</button>
  </div>
}

export default HomePage;