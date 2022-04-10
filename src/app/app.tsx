import { useEffect, useState } from "react"

import Landing from "./components/landing"
import Loading from "./components/loading"
import Quiz from "./components/quiz"

import { Question } from "./question"

import blobYellow from "./img/blob-yellow.png"
import blobBlue from "./img/blob-blue.png"
import retrieveData from "./retrieveData"
import "./app.css"

export default function App() {
  const [questions, setQuestions] = useState(Array<Question>())
  const [quizStarted, setQuizStarted] = useState(false)
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    try {
      retrieveData(setQuestions)
    } catch {
      setApiError(true)
    }
  }, [])

  return (
    <main>
      <img src={blobYellow} alt="" id="blob-yellow" />
      <Loading isLoading={questions.length === 0 && quizStarted} />
      {!quizStarted && (
        <Landing
          title="Computer Science Trivia"
          description="Do you know your nerd facts?"
          handleStart={() => setQuizStarted(true)}
          apiError={apiError}
        />
      )}
      {quizStarted && questions.length > 0 && <Quiz questions={questions} />}

      <img src={blobBlue} alt="" id="blob-blue" />
    </main>
  )
}
