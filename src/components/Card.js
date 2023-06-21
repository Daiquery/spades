import { useState } from "react";
import {
  SuitClubFill,
  SuitDiamondFill,
  SuitHeartFill,
  SuitSpadeFill,
} from "react-bootstrap-icons";

function Card({ type, value }) {
  const [isShowing, setIsShowing] = useState(true);

  const iconMap = {
    SPADES: <SuitSpadeFill />,
    HEARTS: <SuitHeartFill style={{ fill: "red" }} />,
    DIAMONDS: <SuitDiamondFill style={{ fill: "red" }} />,
    CLUBS: <SuitClubFill />,
  };

  return (
    <div className="card">
      {isShowing ? (
        <div className="front">
          <h1>{iconMap[type]}</h1>
          <h2 className={((type === "HEARTS" || type ===  "DIAMONDS")) ? "text-red" : null}>{value}</h2>
        </div>
      ) : (
        <div className="back">
            <h4>Hood Spades</h4>
        </div>
      )}    
    </div>
  );
}

export default Card;
