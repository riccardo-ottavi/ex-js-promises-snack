import './App.css'
import axios from 'axios'

function App() {

  function getPostTitle(id) {
    axios.get('https://dummyjson.com/posts/1')
    .then(response => console.log(response.data))
    .catch(error => console.log(error) )
  }


  getPostTitle(4);

  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
