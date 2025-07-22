import { Link } from "react-router-dom";
import Card from "../components/Card";
import { getCardDeck } from "../data/homeData";
import { useMyContext } from "../context/AppContext";

function Home() {
  const { darkMode } = useMyContext();
  const cardDeck = getCardDeck(darkMode);

  return (
    <div>
      <h1 className="mt-4">Welcome to Reactory</h1>
      <div className="card-deck d-flex justify-content-center flex-wrap mt-5 gap-4 align-items-stretch">
        {cardDeck?.map((cardItem, index) => {
          return (
            <Card
              key={index}
              title={cardItem?.title}
              description={cardItem?.description}
              imageUrl={cardItem?.imageUrl}
              link={cardItem?.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
