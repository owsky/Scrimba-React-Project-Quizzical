export default function selectAnswer(
  index: number,
  text: string,
  setSelected: (value: React.SetStateAction<string[]>) => void
) {
  setSelected(oldArray => {
    let newArray = Array<string>()
    oldArray.forEach((element, i) => {
      if (index === i) newArray.push(text)
      else newArray.push(element)
    })
    return newArray
  })
}
