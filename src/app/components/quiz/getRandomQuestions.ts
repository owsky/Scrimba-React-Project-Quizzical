import { Question } from "../../question"

export default function getRandomQuestions(
  allQuestions: Question[]
): Question[] {
  let numbers = Array<number>()
  while (numbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * allQuestions.length)
    if (!numbers.includes(randomNumber)) numbers.push(randomNumber)
  }
  let questions = numbers.map(number => {
    const question = allQuestions.at(number)!
    return { ...question }
  })
  return questions
}
