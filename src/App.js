import { useEffect, useState } from "react";
import "./App.css";
import CardDeck from "./components/CardDeck";
import createCardDeck from "./utils/createCardDeck";

function App() {
  const [deck, setDeck] = useState([]);
  const players = [
    {initial: "A", hand: []}, {initial: "B", hand: []}, {initial: "C", hand: []}, {initial: "D", hand: []},
  ];

  const distributeCards = () => {
    const distributedCards = [];
    players.forEach((player) => {
      for(let i = 0; i < 13; i++){
        player.hand.push(deck[i])
        distributedCards.push(deck[i])
      }
    })
    console.log(players)
  }
 

  useEffect(()=>{
    const newCardDeck = createCardDeck();
    setDeck(newCardDeck);


    
  }, [])

  const shuffleCards = () => {


    const newCardDeck = [...deck];

    let currentIndex = newCardDeck.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [newCardDeck[currentIndex], newCardDeck[randomIndex]] = [
        newCardDeck[randomIndex],
        newCardDeck[currentIndex],
      ];
    }

    setDeck(newCardDeck)
  };

  return (
    <div className="App">
      <button onClick={shuffleCards}>shuffle cards</button>
      <button onClick={distributeCards}>distribute cards</button>

      <CardDeck cards={deck} />
    </div>
  );
}

export default App;
