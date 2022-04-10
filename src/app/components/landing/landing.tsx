import "./landing.css"

type LandingProps = {
  title: string
  description: string
  handleStart: () => void
  apiError: boolean
}

export default function Landing(props: LandingProps): JSX.Element {
  return (
    <div id="landing">
      <div id="landing-header">{props.title}</div>
      <div id="landing-description">{`${
        props.apiError
          ? "There was an error while retrieving the data. Please try again later"
          : props.description
      }`}</div>
      <button
        className={`${
          props.apiError ? "landing-button-disabled" : "landing-button"
        }`}
        onClick={() => {
          if (!props.apiError) props.handleStart()
        }}
      >
        <span id="landing-button-text">Start quiz</span>
      </button>
    </div>
  )
}
