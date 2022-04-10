import { useEffect, useState } from "react"
import { Question } from "../../question"
import MultipleChoiceQuestion from "../multipleChoiceQuestion"
import checkAnswers from "./checkAnswers"
import getRandomQuestions from "./getRandomQuestions"
import resetGame from "./resetGame"
import selectAnswer from "./selectAnswer"
import "./quiz.css"

type QuizProps = {
  questions: Question[]
}

export default function Quiz(props: QuizProps): JSX.Element {
  const [currentQuestions, setCurrentQuestions] = useState(Array<Question>())
  const [selected, setSelected] = useState(Array<string>(5).fill(""))
  const [endGame, setEndGame] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  useEffect(() => {
    setCurrentQuestions(getRandomQuestions(props.questions))
  }, [props.questions])

  const questionsElements = currentQuestions.map((question, index) => {
    return (
      <div key={question.text}>
        <MultipleChoiceQuestion
          text={question.text}
          correctAnswer={question.correctAnswer}
          allAnswers={question.answers}
          selected={selected[index]}
          handleClick={(answer: string) =>
            selectAnswer(index, answer, setSelected)
          }
          endGame={endGame}
        />
        {index < props.questions.length - 1 && <hr />}
      </div>
    )
  })

  return (
    <div className="quiz">
      {questionsElements}
      <div className="bottom-bar">
        {endGame && (
          <span className="results">{`You scored ${correctAnswers}/5 answers`}</span>
        )}
        <button
          id="submit-button"
          onClick={() =>
            endGame
              ? resetGame(
                  props.questions,
                  setSelected,
                  setCurrentQuestions,
                  getRandomQuestions,
                  setCorrectAnswers,
                  setEndGame
                )
              : checkAnswers(
                  currentQuestions,
                  selected,
                  setEndGame,
                  setCorrectAnswers
                )
          }
        >
          {endGame ? "New game" : " Check answers"}
        </button>
      </div>
    </div>
  )
}
