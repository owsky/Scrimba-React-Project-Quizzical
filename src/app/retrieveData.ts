import { Question } from "./question"
import QuestionsDto from "./questionDto"

export default async function retrieveData(
  setQuestions: (value: React.SetStateAction<Question[]>) => void
) {
  try {
    const resp = await fetch(
      "https://opentdb.com/api.php?amount=5&category=18&type=multiple&encode=base64"
    )
    let content: QuestionsDto = await resp.json()
    content.results.forEach(question => {
      question.question = window.atob(question.question)
      question.category = window.atob(question.category)
      question.difficulty = window.atob(question.difficulty)
      question.correct_answer = window.atob(question.correct_answer)
      question.incorrect_answers = question.incorrect_answers.map(el =>
        window.atob(el)
      )
    })
    setQuestions(() => {
      return content.results.map(element => {
        const answersScrambled = element.incorrect_answers
          .concat(element.correct_answer)
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
        const q: Question = {
          text: element.question,
          correctAnswer: element.correct_answer,
          answers: answersScrambled,
        }
        return q
      })
    })
  } catch (e) {
    console.error(e)
    throw e
  }
}
