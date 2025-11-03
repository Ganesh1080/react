import './App.css'
import Random from './tasks/Random'
import { Aeroplane } from './tasks/Aeroplane'
import Login from './tasks/Login'
import {Online} from './tasks/Online'
function App() {

  return (
    <div>
     <Random />
     <Aeroplane />
     <Login />
     <Online />
    </div>
  )
}

export default App
