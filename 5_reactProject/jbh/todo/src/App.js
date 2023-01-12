import logo from './logo.svg'
import './App.css'
import Header from './Components/molecules/header/Header'
import Main from './Components/molecules/main/Main'

function App() {
  return (
    <div className="App">
      <Header title="My header" subtitle="subtitle2" />
      <Main message="My content" />
    </div>
  )
}

export default App
