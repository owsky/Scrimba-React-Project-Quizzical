import "./loading.css"

type LoadingState = {
  isLoading: boolean
}

export default function Loading(props: LoadingState) {
  const loadingElement = (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
  return (
    <section
      className={`${!props.isLoading ? "hideLoading" : "loadingScreen"}`}
    >
      {props.isLoading && loadingElement}
    </section>
  )
}
