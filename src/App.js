import { useCallback, useEffect, useState } from "react"
import Container from "./componentes/Container"
import Center from "./componentes/Center"
import Article from './componentes/Article'
import { Formik } from "formik"

const App = () => {
  const [characters, setCharacters] = useState([])
  const open = url => window.open(url)

  const fetchData = useCallback(async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character?page=7')
    const dataJson = await data.json()
    setCharacters(dataJson.results)    
  }, [])
  
  useEffect(() => {
    fetchData()
      .catch(console.error)
  }, [fetchData])

  return (
    <div>
      <header>
        <Formik>
          
        </Formik>
      </header>
      <Container>
        <Center>
        {characters.map(character =>
          <Article key={character.id} onClick={() => open(character.url)}>
            <img src={character.image} alt='' key={character.id}/>
            <p>{[character.name]}</p>
            <p>{[character.status]}</p>
            <p>{[character.species]}</p>
          </Article>)}
        </Center>
      </Container>
    </div>
  )
}

export default App