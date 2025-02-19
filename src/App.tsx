import style from './App.module.css'
import { Header } from './components/header/header'

function App() {
  return (
    <div className={style.container}>
      <div className={style.paper}>
        <Header/>
        
      </div>

    </div>
  )
}


export default App
