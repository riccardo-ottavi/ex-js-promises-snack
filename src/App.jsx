import './App.css'
import axios from 'axios'

function App() {
  function getPostTitle(id) {
    const dataFetch = new Promise((resolve, reject) => {
      axios.get(`https://dummyjson.com/posts/${id}`)
        .then(response => response.data)
        .then(post => resolve(post.title))
        .catch(reject)
    })
    return dataFetch
  }

  function lanciaDado(){
    const lancio = new Promise((resolve, reject) => {
    console.log("lanncio il dado...")
  
      setTimeout(() => {
        const probability = Math.random()
        console.log(probability)
        if(probability <= 0.2) {
          reject("il dado si è inceppato!")
        }else{
          const risultato = Math.floor(Math.random() * 6) + 1
          resolve(risultato)
        }
      }, 3000)
    })
    return lancio
  }

  lanciaDado()
  .then(diceRes => console.log("il risultato è:", diceRes))
  .catch(error => console.log(error))


  getPostTitle(1)
  .then(title => console.log(title))
  .catch(error => console.log(error))

  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
