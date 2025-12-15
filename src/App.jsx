import './App.css'
import axios from 'axios'

function App() {

  function getPostTitle(id) {
    const dataFetch = new Promise((resolve, reject) => {
      axios.get(`https://dummyjson.com/posts/${id}`)
        .then(response => response.data)
        .then(obj => resolve(obj.title))
        .catch(reject)
    })
    return dataFetch
  }


  getPostTitle(1)
  .then(obj => console.log(obj))
  .catch(error => console.log(error))

  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
