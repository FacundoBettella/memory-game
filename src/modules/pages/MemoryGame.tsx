import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CardsList } from "../components";
import { resetCardState } from "../redux/slices/cards.slice";

const MemoryGame = () => {
  const cards = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch();

  return (
      <div
        className="d-flex flex-column justify-content-center align-items-center m-2"
        style={{ fontWeight: "700" }}
      >
        <h1 className="text-center">Memory Game</h1>
        <CardsList cards={cards} />
        <button
          className="btn btn-primary d-flex justify-content-center align-items-center m-2"
          onClick={() => dispatch(resetCardState())}
        >
          Reset
        </button>
      </div>
  )
}

export default MemoryGame