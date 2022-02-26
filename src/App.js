import { useCallback, useEffect, useState } from "react"
import Container from "./componentes/Container"
import Center from "./componentes/Center"

const App = () => {
  const [characters, setCharacters] = useState([])
  const fetchData = useCallback(async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character?page=7')
    const dataJson = await data.json()
    console.log(dataJson);
    setCharacters(dataJson.results)    
  }, [])
  
  useEffect(() => {
    fetchData()
      .catch(console.error)
  }, [fetchData])

  return (
    <Container>
      <Center>
      {characters.map(character =>
        <img src={character.image} alt='200' key={character.id}/>)}
      </Center>
    </Container>
  )
}

export default App