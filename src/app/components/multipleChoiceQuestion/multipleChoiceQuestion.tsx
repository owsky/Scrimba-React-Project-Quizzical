import "./multipleChoiceQuestion.css"

type MultipleChoiceQuestionProps = {
  text: string
  correctAnswer: string
  allAnswers: string[]
  selected: string
  handleClick: (answer: string) => void
  endGame: boolean
}

export default function MultipleChoiceQuestion(
  props: MultipleChoiceQuestionProps
) {
  const answersElements = props.allAnswers.map(answer => {
    return (
      <button
        key={answer}
        className={`answer-button
          ${
            !props.endGame
              ? `interactable-button ${
                  props.selected === answer ? "selected-button" : ""
                }`
              : props.selected === answer
              ? answer === props.correctAnswer
                ? "right-answer"
                : "wrong-answer"
              : answer === props.correctAnswer
              ? "right-answer"
              : ""
          }`}
        onClick={() => {
          if (!props.endGame) props.handleClick(answer)
        }}
      >
        <span className="answer-text">{answer}</span>
      </button>
    )
  })
  return (
    <div className="multiple-choice">
      <span className="question-text">{props.text}</span>
      <div className="answers">{answersElements}</div>
    </div>
  )
}
