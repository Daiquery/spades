import Card from "./Card";

function CardDeck({cards = []}) {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} type={card.type} value={card.value} />
      ))}
    </div>
  );
}

export default CardDeck;
