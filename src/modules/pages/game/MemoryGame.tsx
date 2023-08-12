import "./memoryGame.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Button, CardsList } from "../../components";
import { resetCardState } from "../../redux/slices/cards.slice";

const MemoryGame = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <div className="game-container">
      <h1 className="game-title">Memory Game</h1>
      <CardsList cards={cards} />
      <Button
        color="primary"
        text="Suffle"
        onClick={() => dispatch(resetCardState())}
      />
    </div>
  );
};

export default MemoryGame;
