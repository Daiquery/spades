export const cardTypes = ["SPADES", "HEARTS", "DIAMONDS", "CLUBS"];



const createCardDeck = () => {
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const jokers = ["BJ", "LJ"];
  

  return cardTypes.reduce((acc, curr) => {
    for (let i = 0; i < cardValues.length; i++) {
      acc.push({ type: curr, value: cardValues[i] });

      if (curr === cardTypes[0] && i === cardValues.length - 1) {
        for (let x = 0; x < jokers.length; x++) {
          acc.push({ type: curr, value: jokers[x] });
        }
      }
    }
    return acc;
  }, []);
};

export default createCardDeck;

// [{ type: "SPADES", value: "2"}]
