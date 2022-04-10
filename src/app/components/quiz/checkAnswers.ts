import { Question } from "../../question"

export default function checkAnswers(
  currentQuestions: Question[],
  selectedAnswers: string[],
  setEndGame: (value: boolean) => void,
  setCorrectAnswers: (value: number) => void
) {
  setEndGame(true)
  let correct = 0
  selectedAnswers.forEach((string, index) => {
    if (string === currentQuestions[index].correctAnswer) ++correct
  })
  setCorrectAnswers(correct)
}
