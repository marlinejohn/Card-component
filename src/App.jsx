import Card from "./Card"
import Button from "./ButtonComponent"
import Student from "./Student"

function App() {
  return(
    <div>
      <Card />
      <Card />
      <Card />
      <Student name ="Marline" age={100} isTrue ={true} />
      <Student name="ABCD" age={3} isTrue={false}/>
      <Student name="XYZ" age={40} isTrue={true}/>
      <Student name="Pizza" age={50} isTrue={false}/>
      <Student />
      <Student name="Larry" />
      <div>
      <Button />
      </div>
    </div>
  )
 }

export default App
