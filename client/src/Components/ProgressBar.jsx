const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        {progress.toFixed(2)}%
      </div>
    </div>
  );
};

export default ProgressBar;
