import { useRef, useState } from "react"
import CustomInput from "./CustomInput"

function App() {
  const [value, setValue] = useState("Hello")
  const inputRef = useRef()

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </>
  )
}

export default App
