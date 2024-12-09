import { useState } from "react"
const App = () => {
  const [count, setcount] = useState(100)
  
  return (
    <div >
      <div className="a">
          {count}
      </div>
      <button onClick={()=> setcount(count-1)}>-</button>
    </div>
  )
}

export default App

