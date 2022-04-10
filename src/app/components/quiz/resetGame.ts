import { Question } from "../../question"

export default function resetGame(
  allQuestions: Question[],
  setSelected: (value: string[]) => void,
  setCurrentQuestions: (value: Question[]) => void,
  getRandomQuestions: (value: Question[]) => Question[],
  setCorrectAnswers: (value: number) => void,
  setEndGame: (value: boolean) => void
) {
  setSelected(Array<string>(5).fill(""))
  setCurrentQuestions(getRandomQuestions(allQuestions))

  setCorrectAnswers(0)
  setEndGame(false)
}
