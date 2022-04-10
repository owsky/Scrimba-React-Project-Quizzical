type QuestionDto = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
}

export default interface QuestionsDto {
  response_code: number
  results: QuestionDto[]
}
