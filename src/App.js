import React, { useState } from "react"
import CharacterCard from "./CharacterCard"
import Wrapper from "./Wrapper"
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import "./App.css"
import data from "./characters.json"

const App = () => {
  const [characters, setCharacters] = useState(data)
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [clicked, setClicked] = useState(false)

  // useEffect(() => {
  //   fetch("/characters.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCharacters(data)
  //     })
  // }, [])

  // useEffect(() => {
  //   const fetchJSON = async () => {
  //     const response = await fetch("/characters.json")
  //     console.log(response)
  //     const data = await response.json()
  //     setCharacters(data)
  //   }

  //   fetchJSON()
  // }, [])

  const handleClick = (id) => {
    // manejador del click.
    shuffleArray() //
    handleScore(id)
    /*  console.log(this.state.timesClicked); */
  }

  const handleScore = (id) => {
    characters.forEach((element) => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true
        setClicked(false)
        handleIncrement()
        console.log(characters) // solo para checquear que se ponga en en true.
      } else if (id === element.id && element.clicked === true) {
        if (currentScore > highScore) {
          setHighScore(currentScore)
        }

        setCurrentScore(0)
        setClicked(true)
        characters.forEach((element) => (element.clicked = false))
        console.log(characters) // para chequear que todo esten reseteados a false.
      }
    })
  }

  const shuffleArray = () => {
    // Shuffle array of objects
    const shuffledArr = shuffle(characters)
    // Setting 'shuffledArr' as the new state
    setCharacters(shuffledArr)
  }

  // handleIncrement increments this.state.currentScore by 1
  const handleIncrement = () => {
    // Using setState method to update component's state
    setCurrentScore(currentScore + 1)
  }

  // Function that takes an array as a parameter and shuffles it
  const shuffle = (array) => {
    // let currentIndex = array.length
    // let randomIndex
    // let temporaryValue

    // while (--currentIndex > 0) {
    //   randomIndex = Math.floor(Math.random() * (currentIndex + 1))
    //   temporaryValue = array[randomIndex]
    //   array[randomIndex] = array[currentIndex]
    //   array[currentIndex] = temporaryValue
    // }
    // return array

    for (let j, i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i
      const t = array[i]
      array[i] = array[j]
      array[j] = t
      // [array[i] array[j]] = [array[j], array[i]];
    }

    return array
  }

  return (
    <Wrapper
      style={{
        backgroundImage: `url("https://images7.alphacoders.com/677/thumb-1920-677266.png")`,
      }}
    >
      <Navbar currentScore={currentScore} highScore={highScore} />
      <Jumbotron />

      {characters.map((character) => (
        <CharacterCard
          Clicked={clicked}
          handleClick={handleClick}
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
          occupation={character.occupation}
        />
      ))}
    </Wrapper>
  )
}

export default App
