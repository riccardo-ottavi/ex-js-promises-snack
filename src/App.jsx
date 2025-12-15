import './App.css'
import axios from 'axios'

function App() {

  function getPostTitle(id){
    console.log("funzione chiamata", id)
  }


  getPostTitle(4);

  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
