import Card from "./Card";

function CardDeck({cards = []}) {
  return (
    <div>
      {cards.map((card) => (
        <Card type={card.type} value={card.value} />
      ))}
    </div>
  );
}

export default CardDeck;
